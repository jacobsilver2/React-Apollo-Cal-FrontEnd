import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Link from 'next/link'
import gql from 'graphql-tag';
import Router from 'next/router';
import { format } from 'date-fns';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { ALL_EVENTS_QUERY } from './Calendar'; 
import { ALL_ACTS_QUERY } from './Acts';


const CREATE_EVENT_WITH_NEW_ACT_MUTATION = gql`
  mutation CREATE_EVENT_WITH_NEW_ACT_MUTATION(
      $date: DateTime!
      $notes: String
      $name: String
      $email: String
      $description: String
      $image: String
      $largeImage: String
      $actId: String
  ) {
    createEventWithNewAct( 
        date: $date
        notes: $notes
        name: $name
        email: $email
        description: $description
        image: $image
        largeImage: $largeImage
        actId: $actId
    ) 
    { 
      id
      act {
        id
      }
    }
  }
`;

const CREATE_EVENT_WITH_EXISTING_ACT_MUTATION = gql`
  mutation CREATE_EVENT_WITH_EXISTING_ACT_MUTATION(
    $date: DateTime!
    $notes: String
    $actId: String
  ){
    createEventWithExistingAct(
      date: $date
      notes: $notes
      actId: $actId
    ){
      id
      act {
        id
      }
    }
  }
`;


class CreateEvent extends Component {
  state = {
      date: '',
      notes: '',
      name: '',
      image: '',
      largeImage: '',
      email: '',
      description: '',
      actId: '',
  }

  componentDidMount() {
    if (Router.query.date) {
      this.setState({
        date: Router.query.date
      })
    }
  }

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
      if (type === 'select-one') {
        return (
          this.setState({
            actId: val,
            name: '',
            email: '',
            description: '',
            image: '',
            largeImage: ''
          })
        )
      }
      this.setState({
        [name]: val
      })
    }
    

  
  uploadFile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'react-apollo-cal');
    const res = await fetch('https://api.cloudinary.com/v1_1/dlskxwzm6/image/upload', {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    })
  }

  render() {
    return (
      <Query query={ALL_ACTS_QUERY}>
        {({data, loading}) => {
          if (loading) return <p>Loading...</p>;
          return (
          <Mutation 
            mutation={CREATE_EVENT_WITH_NEW_ACT_MUTATION} 
            variables={this.state} 
            refetchQueries={[{ query: ALL_EVENTS_QUERY }, { query: ALL_ACTS_QUERY}]}
          >
            {(createEventWithNewAct, { loading, error }) => (
              <Mutation 
                mutation={CREATE_EVENT_WITH_EXISTING_ACT_MUTATION} 
                variables={{date: this.state.date, notes: this.state.notes, actId: this.state.actId}} 
                refetchQueries={[{ query: ALL_EVENTS_QUERY }, { query: ALL_ACTS_QUERY}]}
              >
                {(createEventWithExistingAct, { loading, error}) => (
                  <Form onSubmit={ async (e) => {
                    e.preventDefault();
                    const res = !this.state.actId ? await createEventWithNewAct() : await createEventWithExistingAct();
                    Router.push({
                      pathname: '/'
                    })
                  }}>
                    <Error error={error} />
                
                    <fieldset disabled={loading} aria-busy={loading}>
                      <label htmlFor="date">
                        Date
                        <input type="date" id="date" name="date" placeholder="Date" value={this.state.date} onChange={this.handleChange}/>
                      </label>
                
                      <label htmlFor="notes">
                        Notes
                        <textarea id="notes" name="notes" placeholder="Enter Some Notes" value={this.state.notes} onChange={this.handleChange}/>
                      </label>
                
                      <label htmlFor="acts">
                        Select An Act Already In The Database
                        <select defaultValue="" onChange={this.handleChange}>
                          <option value="" disabled>Acts</option>
                          {
                            data.acts.map(act => <option key={act.id} value={act.id}>{act.name}</option>)
                          }
                        </select>
                      </label>
                      <hr />
                      <h4>Or Create A New Act</h4>
                      <hr />
                      <label htmlFor="name">
                        Name
                        <input type="text" id="name" name="name" placeholder="Name" disabled={!!this.state.actId} required={!this.state.actId} value={this.state.name} onChange={this.handleChange}/>
                      </label>
                        
                      <label htmlFor="description">
                        Description
                        <textarea id="description" name="description" placeholder="Enter A Description" disabled={!!this.state.actId} required={!this.state.actId} value={this.state.description} onChange={this.handleChange}/>
                      </label>
                        
                      <label htmlFor="email">
                        Email
                        <input type="email" id="email" name="email" placeholder="email" disabled={!!this.state.actId} required={!this.state.actId} value={this.state.email} onChange={this.handleChange}/>
                      </label>
                        
                      <label htmlFor="file">
                        Image
                        <input type="file" id="file" name="file" disabled={!!this.state.actId} placeholder="Upload an image" onChange={this.uploadFile}/>
                        {this.state.image && <img src={this.state.image} alt="Upload Preview" width="200"/>}
                      </label>
                        
                      <button type="submit">Submit</button>
                    </fieldset>
                  </Form>      
                )}
              </Mutation>
            )}
          </Mutation>
          );
        }}
      </Query>
    );
  }
}

export { CREATE_EVENT_WITH_EXISTING_ACT_MUTATION, CREATE_EVENT_WITH_NEW_ACT_MUTATION };
export default CreateEvent;