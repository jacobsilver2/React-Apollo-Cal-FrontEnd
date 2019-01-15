import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import {addMinutes, addHours} from 'date-fns';
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
      $title: String!
      $start: DateTime!
      $end: DateTime!
      $allDay: Boolean!
      $notes: String
      $name: String
      $email: String
      $description: String
      $image: String
      $largeImage: String
      $actId: String
  ) {
    createEventWithNewAct( 
        title: $title
        start: $start
        end: $end
        allDay: $allDay
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
    $title: String
    $start: DateTime!
    $end: DateTime!
    $allDay: Boolean!
    $notes: String
    $actId: String
  ){
    createEventWithExistingAct(
      title: $title
      start: $start
      end: $end
      allDay: $allDay
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
      duration: 45,
      title: format(new Date(), "MM-dd-YYYY", {awareOfUnicodeTokens: true}),
      start: new Date(),
      end: addMinutes(new Date(), 45),
      allDay: false,
      notes: '',
      name: '',
      image: '',
      largeImage: '',
      email: '',
      description: '',
      actId: '',
  }

  componentDidMount() {
    if (Router.query.start) {
      const decodedStart = decodeURIComponent(Router.query.start);
      const decodedEnd = decodeURIComponent(Router.query.end);
      this.setState({
        title: format(new Date(decodedStart), "YYYY-MM-dd", {awareOfUnicodeTokens: true}),
        start: new Date(decodedStart),
        end: new Date(decodedEnd),
      })
    };

  }

  handleChange = (e) => {
    const { name, type, value } = e.target;
    
    switch (type) {
      case 'date':
        const time = format(this.state.start, "H:MM", {awareOfUnicodeTokens: true});
        let startDateTime = new Date(`${value} ${time}`);
        const title = format(value, "YYYY-MM-dd", {awareOfUnicodeTokens: true});
        let end = addMinutes(startDateTime, this.state.duration);
        this.setState({ start: startDateTime, title, end });
        break;
      case 'time':
        const date = format(this.state.start, "YYYY-MM-dd", {awareOfUnicodeTokens: true});
        startDateTime = new Date(`${date} ${value}`);
        end = addMinutes(startDateTime, this.state.duration);
        this.setState({ start: startDateTime, end });
        break;
      case 'number':
        const val = parseFloat(value);
        this.setState({duration: val, end: addMinutes(this.state.start, val)})
        break;
      case 'checkbox':
        this.setState({ allDay: !this.state.allDay })
        break;
      case ('select-one'):
        this.setState({ actId: value, name: '', email: '', description: '', image: '', largeImage: '' })
        break;
      default: 
        this.setState({ [name]: value });
    }
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
    const dateFormat="yyyy-MM-dd"
    const timeFormat="H:mm"
    return (
      <Query query={ALL_ACTS_QUERY}>
        {({data, loading}) => {
          if (loading) return <p>Loading...</p>;
          return (
          <Mutation 
            mutation={CREATE_EVENT_WITH_NEW_ACT_MUTATION} 
            variables={{
              title: this.state.title,
              start: this.state.start,
              end: this.state.end,
              allDay: this.state.allDay,
              notes: this.state.notes,
              name: this.state.name,
              image: this.state.image,
              largeImage: this.state.largeImage,
              email: this.state.email,
              description: this.state.description,
              }} 
            refetchQueries={[{ query: ALL_EVENTS_QUERY }, { query: ALL_ACTS_QUERY}]}
          >
            {(createEventWithNewAct, { loading, error }) => (
              <Mutation 
                mutation={CREATE_EVENT_WITH_EXISTING_ACT_MUTATION} 
                variables={{title: this.state.title, start: this.state.start, end: this.state.end, allDay: this.state.allDay ,notes: this.state.notes, actId: this.state.actId}} 
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
                        <input type="date" id="date" name="date" placeholder="Date" value={format(this.state.start, dateFormat, {awareOfUnicodeTokens: true})} onChange={this.handleChange}/>
                      </label>

                      <label htmlFor="time">
                        Time
                        <input type="time" id="time" name="time" placeholder={format(addHours(new Date(this.state.start), 20), timeFormat)} value={format(this.state.start, timeFormat, {awareOfUnicodeTokens: true})} onChange={this.handleChange}/>
                      </label>

                      <label htmlFor="duration">
                        Duration (minutes)
                        <input type="number" id="duration" name="duration" placeholder="45" value={this.state.duration} onChange={this.handleChange} />
                      </label>

                      <label>
                        All Day
                        <input type="checkbox" id="allday" name="allday" checked={this.state.allDay} onChange={this.handleChange} />
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