import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { format, addHours } from 'date-fns'
import {ALL_ACTS_QUERY} from './Acts';

const SINGLE_EVENT_QUERY = gql`
  query SINGLE_EVENT_QUERY($id: ID!) {
    event(where: {id: $id}) {
      id
      start
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
      $start: DateTime
      $notes: String
      $name: String
      $description: String
      $email: String
      $image: String
      $largeImage: String
      $actId: String
      $newActId: String
  ) {
    updateEvent(
      id: $id
      start: $start
      notes: $notes
      name: $name
      description: $description
      email: $email
      image: $image
      largeImage: $largeImage
      actId: $actId
      newActId: $newActId
    ) {
      id
      start
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

/* eslint-disable */
const Composed = adopt({
  singleEventQuery: ({singleEventId, render}) => <Query query={SINGLE_EVENT_QUERY} variables={{id: singleEventId}}>{render}</Query>,
  // allActsQuery: ({render}) => <Query query={ALL_ACTS_QUERY}>{render}</Query>,
  // updateEventMutation:({updateVars, render}) => <Mutation mutation={UPDATE_EVENT_MUTATION} variables={updateVars}>{render}</Mutation>,
})
/* eslint-enable */


class UpdateEvent extends Component {
  // todo: it would be great to not have the image preloaded into state
  state = {
    image: '',
  }

  componentDidMount() {
    if (Router.query.start) {
      this.setState({
        start: new Date(decodeURIComponent(Router.query.start)),
      })
    };
  }

  handleChange = (e) => {
    const { name, type, value } = e.target;
    // let val = type === 'number' ? parseFloat(value) : value;
    switch (type) {
      case 'date':
        const time = format(this.state.start, "H:MM", {awareOfUnicodeTokens: true});
        const startDateTime = new Date(`${value} ${time}`);
        this.setState({ start: startDateTime });
        break;
      case 'time':
        const date = format(this.state.start, "YYYY-MM-dd", {awareOfUnicodeTokens: true});
        const start = new Date(`${date} ${value}`);
        this.setState({start})
        break;
      case 'number':
        const val = parseFloat(value);
        this.setState({ [name]: val });
        break;
      case ('select-one'):
        this.setState({ newActId: val, name: '', email: '', description: '', image: '', largeImage: '' })
        break;
      default:
        this.setState({ [name]: value });
    }
    }


  updateEvent = async (e, updateEventMutation, actId) => {
    e.preventDefault();
    const res = await updateEventMutation({
      variables: {
        id: this.props.id,
        start: this.state.start,
        actId,
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
  renderPreview = (img) => {
    if (this.state.image) {
      return (
        <img src={this.state.image} alt="Upload Preview" width="200"/>
      )
    } 
    this.setState({
      image: img
    })
    return (
      <img src={img} alt="Upload Preview" width="200"/>
    )  
  }


  render() {
    return (
      <Composed singleEventId={this.props.id}>
        {({singleEventQuery}) => {
          if (singleEventQuery.loading) return <p>Loading...</p>
          if (!singleEventQuery.data.event) return <p>No Event Found for ID {this.props.id}</p>

          {/* let compensatedDate = addHours(singleEventQuery.data.event.start, 5); */}
          {/* let formattedDate = format(compensatedDate, "YYYY-MM-dd", { awareOfUnicodeTokens: true }); */}
          {/* let formattedTime = format(singleEventQuery.data.event.start, "HH:mm");  */}
          const {event} = singleEventQuery.data; 
          const formattedDate = format(event.start, "YYYY-MM-dd", {awareOfUnicodeTokens: true});
          const formattedTime = format(event.start, "HH:mm", {awareOfUnicodeTokens:true});
          
          return (
            <Mutation mutation={UPDATE_EVENT_MUTATION} variables={this.state}>
              {(updateEvent, { loading, error }) => (
                <Query query={ALL_ACTS_QUERY}>
                  {({data}) => 
                  <Form onSubmit={e => this.updateEvent(e, updateEvent, singleEventQuery.data.event.act.id)}>
                    <Error error={error} />
                
                    <fieldset disabled={loading} aria-busy={loading}>
                      <label htmlFor="date">
                        Date
                        <input type="date" id="date" name="date" placeholder="Date" required defaultValue={formattedDate} onChange={this.handleChange}/>
                      </label>

                      <label htmlFor="time">
                        Time
                        <input type="time" id="time" name="time" placeholder="Date" required defaultValue={formattedTime} onChange={this.handleChange}/>
                      </label>
                
                      <label htmlFor="notes">
                        Notes
                        <textarea id="notes" name="notes" placeholder="Enter A Description" required defaultValue={singleEventQuery.data.event.notes} onChange={this.handleChange}/>
                      </label>

                      <label htmlFor="name">
                        Act Name
                        <textarea id="name" name="name" placeholder="Act Name" required defaultValue={singleEventQuery.data.event.act.name} onChange={this.handleChange}/>
                      </label>

                      <label htmlFor="description">
                        Blurb
                        <textarea id="description" name="description" placeholder="Blurb" required defaultValue={singleEventQuery.data.event.act.description} onChange={this.handleChange}/>
                      </label>

                      <label htmlFor="email">
                        Email 
                        <textarea id="email" name="email" placeholder="contact email" required defaultValue={singleEventQuery.data.event.act.email} onChange={this.handleChange}/>
                      </label>

                      <label htmlFor="image">
                        Picture
                        <input type="file" id="file" name="file"  placeholder="Upload an image" onChange={this.uploadFile}/>
                        {this.renderPreview(singleEventQuery.data.event.act.image)}
                      </label>
                      <hr />
                      <h3>Or Change To A Different Act</h3>
                      <select defaultValue="" onChange={this.handleChange}>
                        <option value="" disabled>Acts</option>
                        {
                          data.acts.map(act => <option key={act.id} value={act.id}>{act.name}</option>)
                        }
                      </select>
                      <button type="submit">Sav{loading ? 'ing' : 'e'} Changes</button>

                    </fieldset>
                  </Form>      
                  }
                </Query>
              )}
            </Mutation>
          )
        }}
      </Composed>
    );
  }
}

export { UPDATE_EVENT_MUTATION, SINGLE_EVENT_QUERY };
export default UpdateEvent;