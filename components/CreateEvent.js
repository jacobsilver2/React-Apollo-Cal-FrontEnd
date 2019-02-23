import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import {addMinutes, addHours} from 'date-fns';
import Link from 'next/link'
import { adopt } from 'react-adopt';
import { Spring } from 'react-spring/renderprops';
import Router from 'next/router';
import { format } from 'date-fns';
import Form from './styles/Form';
import Error from './ErrorMessage';
import * as queries from './globals/queries/queries';
import * as mutations from './globals/mutations/mutations';
import {possibleStatus} from '../lib/possibleStatus';
import Button from './styles/SickButton';



const Composed = adopt({
  allActsQuery: ({render}) => <Query query={queries.ALL_ACTS_QUERY}>{render}</Query>,
  createEventWithNewActMutation: ({eventNewActUpdates, render}) => <Mutation variables={eventNewActUpdates} mutation={mutations.CREATE_EVENT_WITH_NEW_ACT_MUTATION} refetchQueries={[{ query: queries.ALL_EVENTS_QUERY }, { query: queries.ALL_ACTS_QUERY}]}>{render}</Mutation>,
  createEventWithExistingActMutation: ({eventExistingActUpdates, render}) => <Mutation variables={eventExistingActUpdates} mutation={mutations.CREATE_EVENT_WITH_EXISTING_ACT_MUTATION} refetchQueries={[{ query: queries.ALL_EVENTS_QUERY }, { query: queries.ALL_ACTS_QUERY}]}>{render}</Mutation>,
  spring: ({render}) => <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>{render}</Spring>,
})

class CreateEvent extends Component {
  state = {
      duration: 45,
      title: format(new Date(), "MM-dd-YYYY", {awareOfUnicodeTokens: true}),
      status: 'CONFIRMED',
      start: new Date(),
      end: addMinutes(new Date(), 45),
      allDay: false,
      notes: [''],
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
    switch (name) {
      case 'status':
        return this.setState({status: value});
      case 'select-existing-act':
        return this.setState({ actId: value, name: '', email: '', description: '', image: '', largeImage: '' });
      case 'notes':
        const notes = [...this.state.notes];
        const selectedIndex = parseInt(e.target.dataset.key);
        notes[selectedIndex] = value;
        return this.setState({ notes });
    }

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

  addNoteField = (e) => {
    e.preventDefault();
    const notes = [...this.state.notes];
    notes.push('');
    this.setState({notes});
  }

  render() {
    const dateFormat="yyyy-MM-dd"
    const timeFormat="H:mm"
    const notes = this.state.notes.map((note, index) => {
      return <textarea id="notes" key={index} data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={this.handleChange}/>
    })
    return (
      <Composed 
        eventNewActUpdates={{title: this.state.title, status: this.state.status, start: this.state.start, end: this.state.end, allDay: this.state.allDay, notes: this.state.notes, name: this.state.name, image: this.state.image, largeImage: this.state.largeImage, email: this.state.email, description: this.state.description,}}
        eventExistingActUpdates={{title: this.state.title,  status: this.state.status, start: this.state.start, end: this.state.end, allDay: this.state.allDay ,notes: this.state.notes, actId: this.state.actId}}
      >
        {({allActsQuery, createEventWithNewActMutation, createEventWithExistingActMutation, spring}) => {
          if (allActsQuery.loading) return <p>Loading...</p>;
            return (
              <div style={spring}>
                <Form onSubmit={ async (e) => {
                  e.preventDefault();
                  const res = !this.state.actId ? await createEventWithNewActMutation() : await createEventWithExistingActMutation();
                  Router.push({
                    pathname: '/'
                  })
                }}>
                  <Error error={allActsQuery.error} />
                  <fieldset disabled={allActsQuery.loading} aria-busy={allActsQuery.loading}>
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
              
                    <label htmlFor="status">
                      Status
                      <select name="status" defaultValue={this.state.status} onChange={this.handleChange}>
                        { possibleStatus.map(status => <option key={status} value={status}>{status}</option>) }
                      </select>
                    </label>
              
                    <label>
                      All Day
                      <input type="checkbox" id="allday" name="allday" checked={this.state.allDay} onChange={this.handleChange} />
                    </label>
              
                    <label htmlFor="notes">
                      Notes
                      {notes}
                      <button onClick={this.addNoteField}>&#43;</button>
                    </label>
                  </fieldset>
              
                  <fieldset>
                    <label htmlFor="acts">
                      Select An Act Already In The Database
                      <select name="select-existing-act" defaultValue="" onChange={this.handleChange}>
                        <option value="" disabled>Acts</option>
                        {
                          allActsQuery.data.acts.map(act => <option key={act.id} value={act.id}>{act.name}</option>)
                        }
                      </select>
                    </label>
                    <hr />
                  </fieldset>
                      
                  <fieldset>
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
                      
                    <Button type="submit">Submit</Button>
                  </fieldset>
                  </Form> 
                </div>     
          )
        }}
      </Composed>
    );
  }
}

export default CreateEvent;