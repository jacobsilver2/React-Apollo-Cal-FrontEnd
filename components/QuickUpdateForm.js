import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import { Spring } from 'react-spring/renderprops.cjs';
import moment from 'moment';
import Router from 'next/router';
import Error from './ErrorMessage';
import QuickUpdateStyled from './styles/QuickUpdateStyles';
import Form from './styles/QuickUpdateFormStyles';
import Button from './styles/DeleteButtonStyles';
import OtherButton from './styles/SickButton';
import * as mutations from './globals/mutations/mutations';
import * as queries from './globals/queries/queries';
import * as updateEventMethods from './globals/functions/updateEventMethods';
import { possibleStatus } from '../lib/possibleStatus';
import Reminders from './Reminders';

const Composed = adopt({
  allActs: ({ render }) => <Query query={queries.ALL_ACTS_QUERY}>{render}</Query>,
  updateEventMutation: ({ updates, render }) => <Mutation mutation={mutations.UPDATE_EVENT_MUTATION} variables={updates} refetchQueries={[{ query: queries.ALL_EVENTS_QUERY}]}>{render}</Mutation>,
  toggleModalMutation: ({ render }) => <Mutation mutation={mutations.TOGGLE_MODAL_MUTATION}>{render}</Mutation>,
  spring:({render}) => <Spring from={{ opacity: 0, marginTop: -500 }} to={{ opacity: 1, marginTop: 0 }} config={{ duration: 250}}>{render}</Spring>,
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
        return this.setState({ duration: val, end: !!this.state.start ? moment(this.state.start).add(val, 'minutes') : moment(this.props.start).add(val, 'minutes') });
        
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
        // const time = format(this.state.start, "H:MM", { awareOfUnicodeTokens: true });
        const time = moment(this.state.start).format('hh:mm');
        let startDateTime = new Date(`${value} ${time}`);
        // const title = format(value, "YYYY-MM-dd", { awareOfUnicodeTokens: true });
        const title = moment(value).format("YYYY-M-D");
        // let end = addMinutes(startDateTime, !!this.state.duration ? this.state.duration : this.props.duration);
        let end = !!this.state.duration ? moment(startDateTime).add(this.state.duration, 'minutes') : moment(startDateTime).add(this.props.duration, 'minutes');
        this.setState({ start: startDateTime, title, end });
        break;
      case 'time':
        // const date = format(!!this.state.start ? this.state.start : this.props.start, "YYYY-MM-dd", { awareOfUnicodeTokens: true });
        const date = !!this.state.start ? moment(this.state.start).format("YYYY-M-D") : moment(this.props.start).format("YYYY-M-D");
        startDateTime = new Date(`${date} ${value}`);

        // end = addMinutes(startDateTime, !!this.state.duration ? this.state.duration : this.props.duration);
        end = !!this.state.duration ? moment(this.state.duration).add(startDateTime, 'minutes') : moment(this.props.duration).add(startDateTime, 'minutes');
        this.setState({ start: startDateTime, end });
        break;
      case 'checkbox':
        this.setState({ allDay: !!this.state.allDay ? !this.state.allDay : !this.props.allDay})
        break;
      default:
        this.setState({ [name]: value});
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
    await closeModal();
  }

  render() {
    return (
      <Composed singleEventId={this.props.id} updateCache={updateEventMethods.updateCache}>
        {({ allActs, updateEventMutation, toggleModalMutation, spring }) => {
          const { event } = this.props;
          // const formattedDate = format(parseISO(event.start), "YYYY-MM-dd", { awareOfUnicodeTokens: true });
          const formattedDate = moment(event.start).format("YYYY-MM-DD");
          console.log(formattedDate);
          // const formattedTime = format(parseISO(event.start), "HH:mm", { awareOfUnicodeTokens: true });
          const formattedTime = moment(event.start).format("HH:mm");
          let notes = null;
          if (this.state.notes) {
            notes = this.state.notes.map((note, index) => <div key={index}><textarea id="notes" data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={this.handleChange} /><Button onClick={(e) => this.handleDeleteNote(e, index)}>-</Button></div>)
          } else if (event.notes.length > 0) {
            notes = event.notes.map((note, index) => <div key={index}><textarea id="notes" data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={this.handleChange} disabled /> <Button onClick={(e) => this.handleDeleteNote(e, index, event.notes)}>-</Button></div>)
          }
          const acts = allActs.data.acts ? allActs.data.acts.map(act => <option key={act.id} value={act.id}>{act.name}</option>) : null;
          return (
                  <div style={spring}>
                  <Error error={updateEventMutation.error} />
                  <Form onSubmit={e => this.updateEvent(e, updateEventMutation, toggleModalMutation)}>
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
                            <input type="number" id="duration" name="duration" defaultValue={moment(event.end).diff(moment(event.start), 'minutes')} onChange={this.handleChange} />
                            
                      </label>

                      <label htmlFor="status">
                        Status
                            <select name="status" defaultValue={event.status} onChange={this.handleChange}>
                          {possibleStatus.map(status => <option key={status} value={status}>{status}</option>)}
                        </select>
                      </label>

                      <label htmlFor="allDay">
                        All Day
                            <input type="checkbox" id="allday" name="allDay" defaultChecked={event.allDay} onChange={this.handleChange} />
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

                      <label htmlFor="automations">
                        <OtherButton onClick={this.props.toggle}>CREATE A REMINDER</OtherButton>
                      </label>

                    </fieldset>

                    <fieldset>
                    <h3>Edit Act</h3>
                    <h6>note: this will alter every event this act is associated with</h6>
                      <label htmlFor="name">
                        Act Name
                          <textarea id="name" name="name" placeholder="Act Name" defaultValue={event.act.name} onChange={this.handleChange} />
                      </label>
                      <label htmlFor="description">
                        Blurb
                          <textarea id="description" name="description" placeholder="Blurb" defaultValue={event.act.description} onChange={this.handleChange} />
                      </label>

                      <label htmlFor="email">
                        Email
                          <textarea id="email" name="email" defaultValue={event.act.email} onChange={this.handleChange} />
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
                      <OtherButton type="submit">Sav{updateEventMutation.loading ? 'ing' : 'e'} Changes</OtherButton>
                    </fieldset>
                  </Form>
                </div>
          )
        }}
      </Composed>
    );
  }
}

export default QuickUpdate;

