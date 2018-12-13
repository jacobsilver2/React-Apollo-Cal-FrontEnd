import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { ALL_EVENTS_QUERY } from './Calendar'; 
import { ALL_ACTS_QUERY } from './Acts';


const CREATE_EVENT_MUTATION = gql`
  mutation CREATE_EVENT_MUTATION(
      $date: DateTime!
      $notes: String
      $name: String
      $email: String
      $description: String
      $image: String
      $largeImage: String
  ) {
    createEvent( 
        date: $date
        notes: $notes
        name: $name
        email: $email
        description: $description
        image: $image
        largeImage: $largeImage
    ) 
    { 
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
  }

  update = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the events in the cache
    const eventsData = cache.readQuery({ query: ALL_EVENTS_QUERY })
    const actsData = cache.readQuery({ query: ALL_ACTS_QUERY })
    // 2. Add the new event to the events
    console.log(payload.data.createEvent.act)
    console.log(actsData);
    eventsData.events = eventsData.events.push(payload.data);
    actsData.acts = actsData.acts.push(payload.data.createEvent.act);
    // 3. Put the items back
    cache.writeQuery( {query: ALL_EVENTS_QUERY, eventsData });
    cache.writeQuery( {query: ALL_ACTS_QUERY, actsData });
  }

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
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
          <Mutation mutation={CREATE_EVENT_MUTATION} update={this.update} variables={this.state}>
            {(createEvent, { loading, error }) => (
            
              <Form onSubmit={ async (e) => {
                e.preventDefault();
                const res = await createEvent();
                Router.push({
                  pathname: '/'
                })
              }}>
                <Error error={error} />
            
                <fieldset disabled={loading} aria-busy={loading}>
                  <label htmlFor="date">
                    Date
                    <input type="date" id="date" name="date" placeholder="Date" required value={this.state.date} onChange={this.handleChange}/>
                  </label>
            
                  <label htmlFor="notes">
                    Notes
                    <textarea id="notes" name="notes" placeholder="Enter Some Notes" value={this.state.notes} onChange={this.handleChange}/>
                  </label>

                  <label htmlFor="acts">
                    Select An Act Already In The Database
                    <select defaultValue="">
                      <option value="" disabled>Acts</option>
                      {
                        data.acts.map(act => <option key={act.id} value={act.name}>{act.name}</option>)
                      }
                    </select>
                  </label>
                  <hr />
                  <h4>Or Create A New Act</h4>
                  <hr />
                  <label htmlFor="name">
                    Name
                    <input type="text" id="name" name="name" placeholder="Name" required value={this.state.name} onChange={this.handleChange}/>
                  </label>
            
                  <label htmlFor="description">
                    Description
                    <textarea id="description" name="description" placeholder="Enter A Description" required value={this.state.description} onChange={this.handleChange}/>
                  </label>
            
                  <label htmlFor="email">
                    Email
                    <input type="email" id="email" name="email" placeholder="email" required value={this.state.email} onChange={this.handleChange}/>
                  </label>
            
                  <label htmlFor="file">
                    Image
                    <input type="file" id="file" name="file" placeholder="Upload an image" onChange={this.uploadFile}/>
                    {this.state.image && <img src={this.state.image} alt="Upload Preview" width="200"/>}
                  </label>
            
                  <button type="submit">Submit</button>
                </fieldset>
              </Form>      
            )}
          </Mutation>
          );
        }}
      </Query>
    );
  }
}

export { CREATE_EVENT_MUTATION };
export default CreateEvent;