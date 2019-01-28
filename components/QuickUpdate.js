import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import {format, differenceInMinutes} from 'date-fns';
import QuickUpdateStyled from './styles/QuickUpdateStyles';
import Closebutton from './styles/CloseButton';
import Error from './ErrorMessage';
import { Portal } from './Portal'
import OverlayStyled from './styles/OverlayStyled';
import Form from './styles/Form';
import Button from './styles/DeleteButtonStyles';
import {TOGGLE_MODAL_MUTATION, ALL_EVENTS_QUERY} from './BigCalendar';
import {UPDATE_EVENT_MUTATION, SINGLE_EVENT_QUERY} from './UpdateEvent';
import {ALL_ACTS_QUERY} from './Acts';
import {possibleStatus} from './CreateEvent';

const Composed = adopt({
  allActs: ({render}) => <Query query={ALL_ACTS_QUERY}>{render}</Query>,
  updateEventMutation: ({updates, render}) => <Mutation mutation={UPDATE_EVENT_MUTATION} variables={updates}>{render}</Mutation>,
  toggleModalMutation: ({render}) => <Mutation mutation={TOGGLE_MODAL_MUTATION}>{render}</Mutation>
});

class QuickUpdate extends Component {
  state = {

  }

  handleChange = e => {
    console.log('changed yo')
  }

  updateCache = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the items we want
    const data = cache.readQuery({ query: ALL_EVENTS_QUERY });
    // 2. Filter the deleted itemout of the page
    const eventIndex = data.events.findIndex(event => event.id === payload.data.moveEvent.id)
    // data.events[eventIndex].start = payload.data.moveEvent.start;
    // data.events[eventIndex].end = payload.data.moveEvent.end;
    console.log(eventIndex)
    // 3. Put the items back!
    cache.writeQuery({ query: ALL_EVENTS_QUERY, data });
  };

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
        <Composed singleEventId={this.props.id} updateCache={this.updateCache}>
          {({ allActs, updateEventMutation, toggleModalMutation }) => {
            const {event} = this.props; 
            const formattedDate = format(event.start, "YYYY-MM-dd", {awareOfUnicodeTokens: true});
            const formattedTime = format(event.start, "HH:mm", {awareOfUnicodeTokens:true});
            debugger;
            let notes = null;
            if (this.state.notes) {
              notes = this.state.notes.map((note, index) => <div key={index}><textarea id="notes" data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={this.handleChange}/><Button onClick={(e)=>this.handleDeleteNote(e, index)}>-</Button></div>)
            } else if (event.notes.length > 0 ) {
              notes = event.notes.map((note, index) => <div key={index}><textarea id="notes" data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={this.handleChange} disabled/> <Button onClick={(e)=>this.handleDeleteNote(e, index, event.notes)}>-</Button></div>)
            } 
            {/* const acts = allActs.data.map(act => <option key={act.id} value={act.id}>{act.name}</option>) */}

            return (
              <Portal selector='#modal'>
                <OverlayStyled>
                  <QuickUpdateStyled>
                    <Closebutton onClick={toggleModalMutation}>X</Closebutton>
                      <Error error={updateEventMutation.error}/>
                        <Form>
                          <fieldset disabled={updateEventMutation.loading} aria-busy={updateEventMutation.loading}>
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
                      </fieldset>

                      <fieldset>
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
                          {/* {this.renderPreview(event.act.image)} */}
                          </label>
                        <hr />

                        <h3>Or Change To A Different Act</h3>
                        <select defaultValue="" onChange={this.handleChange}>
                          <option value="" disabled>Acts</option>
                          {/* { acts } */}
                        </select>
                      <button type="submit">Sav{updateEventMutation.loading ? 'ing' : 'e'} Changes</button>
                      </fieldset>
                    </Form>
                  </QuickUpdateStyled>
                </OverlayStyled>
              </Portal>
            )}}
        </Composed>
    );
  }
}

export default QuickUpdate;

