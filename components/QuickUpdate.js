import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import { format, differenceInMinutes, addMinutes } from 'date-fns';
import * as updateEventMethods from './globals/functions/updateEventMethods';
import QuickUpdateStyled from './styles/QuickUpdateStyles';
import Closebutton from './styles/CloseButton';
import Error from './ErrorMessage';
import { Portal } from './Portal'
import OverlayStyled from './styles/OverlayStyled';
import Form from './styles/Form';
import Button from './styles/DeleteButtonStyles';
import * as mutations from './globals/mutations/mutations';
import * as queries from './globals/queries/queries';
import { possibleStatus } from '../lib/possibleStatus';

const Composed = adopt({
  allActs: ({ render }) => <Query query={queries.ALL_ACTS_QUERY}>{render}</Query>,
  updateEventMutation: ({ updates, render }) => <Mutation mutation={mutations.UPDATE_EVENT_MUTATION} variables={updates}>{render}</Mutation>,
  toggleModalMutation: ({ render }) => <Mutation mutation={mutations.TOGGLE_MODAL_MUTATION}>{render}</Mutation>
});


class QuickUpdate extends Component {
  state = {}

  handleChange = (e) => {
    const { name, type, value } = e.target;
    switch (name) {
      case 'status':
        return this.setState({ status: value });
      case 'select-existing-act':
        return this.setState({ actId: value, name: '', email: '', description: '', image: '', largeImage: '' });
      case 'duration':
        let val = parseFloat(value);
        return this.setState({ duration: val, end: addMinutes(this.state.start, val) });
      case 'draw':
        val = parseFloat(value);
        return this.setState({ [name]: value });
      case 'notes':
        const notes = [...this.state.notes];
        const selectedIndex = parseInt(e.target.dataset.key);
        notes[selectedIndex] = value;
        return this.setState({ notes });
        default:
          this.setState({ [name]: value });
    };

    switch (type) {
      case 'date':
        const time = format(this.state.start, "H:MM", { awareOfUnicodeTokens: true });
        let startDateTime = new Date(`${value} ${time}`);
        const title = format(value, "YYYY-MM-dd", { awareOfUnicodeTokens: true });
        let end = addMinutes(startDateTime, this.state.duration);
        this.setState({ start: startDateTime, title, end });
        break;
      case 'time':
        const date = format(this.state.start, "YYYY-MM-dd", { awareOfUnicodeTokens: true });
        startDateTime = new Date(`${date} ${value}`);
        end = addMinutes(startDateTime, this.state.duration);
        this.setState({ start: startDateTime, end });
        break;
      case 'checkbox':
        this.setState({ allDay: !this.state.allDay })
        break;
    }
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

  updateEvent = async (e, updateEventMutation, closeModal) => {
    e.preventDefault();
    const res = await updateEventMutation({
      variables: {
        id: this.props.event.id,
        ...this.state,
      },
    });
    //run close modal mutation
    await closeModal();
  }


  render() {
    return (
      <Composed singleEventId={this.props.id} updateCache={updateEventMethods.updateCache}>
        {({ allActs, updateEventMutation, toggleModalMutation }) => {
          const { event } = this.props;
          const formattedDate = format(event.start, "YYYY-MM-dd", { awareOfUnicodeTokens: true });
          const formattedTime = format(event.start, "HH:mm", { awareOfUnicodeTokens: true });
          let notes = null;
          if (this.state.notes) {
            notes = this.state.notes.map((note, index) => <div key={index}><textarea id="notes" data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={this.handleChange} /><Button onClick={(e) => this.handleDeleteNote(e, index)}>-</Button></div>)
          } else if (event.notes.length > 0) {
            notes = event.notes.map((note, index) => <div key={index}><textarea id="notes" data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={this.handleChange} disabled /> <Button onClick={(e) => this.handleDeleteNote(e, index, event.notes)}>-</Button></div>)
          }
          const acts = allActs.data.acts ? allActs.data.acts.map(act => <option key={act.id} value={act.id}>{act.name}</option>) : null;
          return (
            <Portal selector='#modal'>
              <OverlayStyled>
                <QuickUpdateStyled>
                  <Closebutton onClick={toggleModalMutation}>X</Closebutton>
                  <Error error={updateEventMutation.error} />
                  <Form onSubmit={e => this.updateEvent(e, updateEventMutation, toggleModalMutation)} >
                    <fieldset disabled={updateEventMutation.loading} aria-busy={updateEventMutation.loading}>
                    <h3>Edit Event</h3>
                      <label htmlFor="date">
                        Date
                            <input type="date" id="date" name="date" placeholder="Date" required defaultValue={formattedDate} onChange={this.handleChange} />
                      </label>

                      <label htmlFor="time">
                        Time
                            <input type="time" id="time" name="time" placeholder="Date" required defaultValue={formattedTime} onChange={this.handleChange} />
                      </label>

                      <label htmlFor="duration">
                        Duration (minutes)
                            <input type="number" id="duration" name="duration" defaultValue={differenceInMinutes(event.end, event.start)} onChange={this.handleChange} />
                      </label>

                      <label htmlFor="status">
                        Status
                            <select name="status" defaultValue={event.status} onChange={this.handleChange}>
                          {possibleStatus.map(status => <option key={status} value={status}>{status}</option>)}
                        </select>
                      </label>

                      <label htmlFor="allDay">
                        All Day
                            <input type="checkbox" id="allday" name="allday" checked={event.allDay} onChange={this.handleChange} />
                      </label>

                      <label htmlFor="draw">
                        Draw
                            <input type="number" id="draw" name="draw" placeholder={event.draw || 0} onChange={this.handleChange} />
                      </label>
                      
                      <label htmlFor="notes">
                        Notes
                            {notes}
                        <Button onClick={(e) => this.addNoteField(e, this.state.notes ? null : event.notes)}>&#43;</Button>
                      </label>

                    </fieldset>

                    <fieldset>
                    <h3>Edit Act</h3>
                    <h6>note: this will alter every event this act is associated with</h6>
                      <label htmlFor="name">
                        Act Name
                          <textarea id="name" name="name" placeholder={event.act.name}  value={this.state.name} onChange={this.handleChange} />
                      </label>
                      <label htmlFor="description">
                        Blurb
                          <textarea id="description" name="description" placeholder="Blurb"  defaultValue={event.act.description} onChange={this.handleChange} />
                      </label>

                      <label htmlFor="email">
                        Email
                          <textarea id="email" name="email" placeholder="contact email"  defaultValue={event.act.email} onChange={this.handleChange} />
                      </label>

                      <label htmlFor="image">
                        Picture
                          <input type="file" id="file" name="file" placeholder="Upload an image" onChange={this.uploadFile} />
                        {/* {this.renderPreview(event.act.image)} */}
                        <img src={this.state.image ? this.state.image : event.act.image} alt="Image Preview" width="200"/>
                      </label>
                      <hr />
                    </fieldset>

                    <fieldset>
                      <h3>Change To A Different Act</h3>
                      <h6>...currently not working</h6>
                      <select defaultValue="" onChange={this.handleChange}>
                        <option value="" disabled>Acts</option>
                        { acts }
                      </select>
                    </fieldset>

                    <fieldset>
                      <h3>Create A New Act</h3>
                      <h6>...work in progress</h6>
                      <button type="submit">Sav{updateEventMutation.loading ? 'ing' : 'e'} Changes</button>
                    </fieldset>
                  </Form>
                </QuickUpdateStyled>
              </OverlayStyled>
            </Portal>
          )
        }}
      </Composed>
    );
  }
}

export default QuickUpdate;

