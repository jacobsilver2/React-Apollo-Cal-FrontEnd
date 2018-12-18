import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { format, addHours } from 'date-fns'

const SINGLE_EVENT_QUERY = gql`
  query SINGLE_EVENT_QUERY($id: ID!) {
    event(where: {id: $id}) {
      id
      date
      notes
      act {
        id
        name
        description
        email
        image
        largeImage
      }
    }
  }
`;



const UPDATE_EVENT_MUTATION = gql`
  mutation UPDATE_EVENT_MUTATION(
      $id: ID!
      $date: DateTime
      $notes: String
      $name: String
      $description: String
      $email: String
      $image: String
      $largeImage: String
      $actId: String
  ) {
    updateEvent(
      id: $id
      date: $date
      notes: $notes
      name: $name
      description: $description
      email: $email
      image: $image
      largeImage: $largeImage
      actId: $actId
    ) {
      id
      date
      notes
      act {
        id
        name
        description
        email
        image
        largeImage
      }
    }
  }
`;

class UpdateEvent extends Component {
  state = {
    image: '',
  }

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val
    })
  }

  updateEvent = async (e, updateEventMutation) => {
    e.preventDefault();
    // console.log('updating event');
    // console.log(this.state);
    const res = await updateEventMutation({
      variables: {
        id: this.props.id,
        ...this.state
      },
    });
    Router.push({
      pathname: '/'
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
    // if a new image has been added, it will be put in state and previewed.
  // otherwise, the image preview will be from the query
  renderPreview = (data) => {
    if (this.state.image) {
      return (
        <img src={this.state.image} alt="Upload Preview" width="200"/>
      )
    } 
      this.setState({
        image: data.event.act.image
      })
      return (
        <img src={data.event.act.image} alt="Upload Preview" width="200"/>
      )  
  }


  render() {
    return (
      <Query query={SINGLE_EVENT_QUERY} variables={{id: this.props.id}}>
        {({data, loading}) => {
          if (loading) return <p>Loading...</p>
          if (!data.event) return <p>No Event Found for ID {this.props.id}</p>
          // !dumb as hell
          // todo: fix this
          let compensatedDate = addHours(data.event.date, 5);
          let formattedDate = format(compensatedDate, "YYYY-MM-dd", { awareOfUnicodeTokens: true });
          return (
            <Mutation mutation={UPDATE_EVENT_MUTATION} variables={this.state}>
              {(updateEvent, { loading, error }) => (
                <Form onSubmit={e => this.updateEvent(e, updateEvent)}>
                  <Error error={error} />
              
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="date">
                      Date
                      <input type="date" id="date" name="date" placeholder="Date" required defaultValue={formattedDate} onChange={this.handleChange}/>
                    </label>
              
                    <label htmlFor="notes">
                      Notes
                      <textarea id="notes" name="notes" placeholder="Enter A Description" required defaultValue={data.event.notes} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor="name">
                      Act Name
                      <textarea id="name" name="name" placeholder="Act Name" required defaultValue={data.event.act.name} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor="description">
                      Blurb
                      <textarea id="description" name="description" placeholder="Blurb" required defaultValue={data.event.act.description} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor="email">
                      Email 
                      <textarea id="email" name="email" placeholder="contact email" required defaultValue={data.event.act.email} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor="image">
                      Picture
                      <input type="file" id="file" name="file"  placeholder="Upload an image" onChange={this.uploadFile}/>
                      {this.renderPreview(data)}
                    </label>
              
                    <button type="submit">Sav{loading ? 'ing' : 'e'} Changes</button>

                  </fieldset>
                </Form>      
              )}
            </Mutation>
          )
        }}
      </Query>
    );
  }
}

export { UPDATE_EVENT_MUTATION, SINGLE_EVENT_QUERY };
export default UpdateEvent;