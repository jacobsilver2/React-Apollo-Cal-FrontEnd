import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { format, addHours, addMinutes, differenceInMinutes } from 'date-fns'
import {ALL_ACTS_QUERY} from './Acts';
import {ALL_EVENTS_QUERY} from './BigCalendar';
import {possibleStatus} from './CreateEvent';
import Button from './styles/DeleteButtonStyles';


const SINGLE_EVENT_QUERY = gql`
  query SINGLE_EVENT_QUERY($id: ID!) {
    event(where: {id: $id}) {
      id
      title
      status
      start
      end
      allDay
      notes
      draw
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
      $title: String
      $status: EventStatus
      $start: DateTime
      $end: DateTime
      $allDay: Boolean
      $notes: [String!]
      $draw: Int
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
      title: $title
      status: $status
      start: $start
      end: $end
      allDay: $allDay
      notes: $notes
      draw: $draw
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
      draw
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

    switch (name) {
      case 'status':
        return this.setState({status: value});
      case 'select-existing-act':
        return this.setState({ actId: value, name: '', email: '', description: '', image: '', largeImage: '' });
      case 'duration':
        let val = parseFloat(value);
        return this.setState({duration: val, end: addMinutes(this.state.start, val)});
      case 'draw':
        val = parseFloat(value);
        return this.setState({ [name]: value });
      case 'notes':
        const notes = [...this.state.notes];
        const selectedIndex = parseInt(e.target.dataset.key);
        notes[selectedIndex] = value;
        return this.setState({ notes });
    };


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
      case 'checkbox':
        this.setState({ allDay: !this.state.allDay })
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

  addNoteField = (e, notes) => {
    e.preventDefault();
    if (notes){
      const notesCopy = [...notes];
      notesCopy.push('')
      return this.setState({notes: notesCopy});
    }
    const notesCopy = [...this.state.notes];
    notesCopy.push('');
    return this.setState({ notes: notesCopy });
  }

  handleDeleteNote = (e, index, notes) => {
    e.preventDefault();
    if (notes){
      const notesCopy = [...notes];
      const notesFiltered = notesCopy.filter((note, i) => i !== index );
      return this.setState({notes: notesFiltered});
    }
    const notesCopy = [...this.state.notes];
    const notesFiltered = notesCopy.filter((note, i) => i != index );
    return this.setState({notes: notesFiltered});    
  }


  render() {
    return (
      <Composed singleEventId={this.props.id}>
        {({singleEventQuery}) => {
          if (singleEventQuery.loading) return <p>Loading...</p>
          if (!singleEventQuery.data.event) return <p>No Event Found for ID {this.props.id}</p>
          const {event} = singleEventQuery.data; 
          // const notes = this.state.notes || event.notes.length > 0  ? event.notes.map((note, index) => <textarea id="notes" key={index} data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={this.handleChange}/>) : null

          let notes = null;
          if (this.state.notes) {
            notes = this.state.notes.map((note, index) => <div key={index}><textarea id="notes" data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={this.handleChange}/><Button onClick={(e)=>this.handleDeleteNote(e, index)}>-</Button></div>)
          } else if (event.notes.length > 0 ) {
            notes = event.notes.map((note, index) => <div key={index}><textarea id="notes" data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={this.handleChange} disabled/> <Button onClick={(e)=>this.handleDeleteNote(e, index, event.notes)}>-</Button></div>)
          } 
          const formattedDate = format(event.start, "YYYY-MM-dd", {awareOfUnicodeTokens: true});
          const formattedTime = format(event.start, "HH:mm", {awareOfUnicodeTokens:true});
          return (
            <Mutation mutation={UPDATE_EVENT_MUTATION} variables={this.state} refetchQueries={[{ query: ALL_EVENTS_QUERY, query: ALL_ACTS_QUERY }]}>
              {(updateEvent, { loading, error }) => (
                <Query query={ALL_ACTS_QUERY}>
                  {({data}) => 
                  <Form onSubmit={e => this.updateEvent(e, updateEvent, event.act.id)}>
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

                      <label htmlFor="duration">
                        Duration (minutes)
                        <input type="number" id="duration" name="duration" defaultValue={differenceInMinutes(event.end, event.start)} onChange={this.handleChange} />
                      </label>

                      <label htmlFor="status">
                        Status
                        <select name="status" defaultValue={event.status} onChange={this.handleChange}>
                        { possibleStatus.map(status => <option key={status} value={status}>{status}</option>) }
                        </select>
                      </label>

                      <label htmlFor="allDay">
                        All Day
                        <input type="checkbox" id="allday" name="allday" checked={event.allDay} onChange={this.handleChange} />
                      </label>
                
                      <label htmlFor="notes">
                        Notes
                        {notes}
                        <Button onClick={(e) => this.addNoteField(e, this.state.notes ? null : event.notes)}>&#43;</Button>
                      </label>

                      <label htmlFor="draw">
                        Draw
                        <input type="number" id="draw" name="draw" placeholder={event.draw || 0} onChange={this.handleChange} />
                      </label>

                      <label htmlFor="name">
                        Act Name
                        <textarea id="name" name="name" placeholder="Act Name" required defaultValue={event.act.name} onChange={this.handleChange}/>
                      </label>

                      <label htmlFor="description">
                        Blurb
                        <textarea id="description" name="description" placeholder="Blurb" required defaultValue={event.act.description} onChange={this.handleChange}/>
                      </label>

                      <label htmlFor="email">
                        Email 
                        <textarea id="email" name="email" placeholder="contact email" required defaultValue={event.act.email} onChange={this.handleChange}/>
                      </label>

                      <label htmlFor="image">
                        Picture
                        <input type="file" id="file" name="file"  placeholder="Upload an image" onChange={this.uploadFile}/>
                        {this.renderPreview(event.act.image)}
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