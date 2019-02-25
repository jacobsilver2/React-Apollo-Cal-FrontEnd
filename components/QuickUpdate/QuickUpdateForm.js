import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import { Spring } from 'react-spring/renderprops.cjs';
import moment from 'moment';
import Error from '../ErrorMessage';
import Form from '../styles/QuickUpdateFormStyles';
import Button from '../styles/DeleteButtonStyles';
import OtherButton from '../styles/SickButton';
import * as mutations from '../globals/mutations/mutations';
import * as queries from '../globals/queries/queries';
import * as updateEventMethods from '../globals/functions/updateEventMethods';
import UpdateEvent from './UpdateEvent';
import UpdateAct from './UpdateActWithinUpdateEvent';
import ChangeAct from './ChangeActWithinUpdateEvent';
import NewAct from './NewActWithinUpdateEvent';

const Composed = adopt({
  allActs: ({ render }) => <Query query={queries.ALL_ACTS_QUERY}>{render}</Query>,
  updateEventMutation: ({ updates, render }) => <Mutation mutation={mutations.UPDATE_EVENT_MUTATION} variables={updates} refetchQueries={[{ query: queries.ALL_EVENTS_QUERY}]}>{render}</Mutation>,
  toggleModalMutation: ({ render }) => <Mutation mutation={mutations.TOGGLE_MODAL_MUTATION}>{render}</Mutation>,
  spring:({render}) => <Spring from={{ opacity: 0, marginTop: -500 }} to={{ opacity: 1, marginTop: 0 }} config={{ duration: 250}}>{render}</Spring>,
});


class QuickUpdate extends Component {
  state = {
    actOption: 'editExisting'
  }

  handleChange = (e) => {
    const { name, type, value } = e.target;

    switch (name) {
      case 'status':
        return this.setState({ status: value });
      case 'select-existing-act':
        return this.setState({ actId: value, name: '', email: '', description: '', image: '', largeImage: '' });
      case 'duration':
        let val = parseFloat(value);
        return this.setState({ duration: val, end: !!this.state.start ? moment(this.state.start).add(val, 'minutes').toDate() : moment(this.props.event.start).add(val, 'minutes').toDate() });
        
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
        if (this.state.start != null) {
          const startTime = moment(this.state.start).format('hh:mm');
          let startDateTime = new Date(`${value} ${startTime}`);
          const title = moment(value).format("YYYY-M-D");
          let end = moment(startDateTime).add(this.state.duration, 'minutes').toDate();
          this.setState({start: startDateTime, title, end});
          break;
        }
        let duration = moment(this.props.event.end).diff(this.props.event.start, 'minutes');
        const startTime = moment(this.props.event.start).format("hh:mm");
        let startDateTime = new Date(`${value} ${startTime}`);
        let end = moment(startDateTime).add(duration, 'minutes').toDate();
        const title = moment(value).format("YYYY-M-D");
        this.setState({start: startDateTime, title, end, duration })
        break;
      case 'time':
        const date = !!this.state.start ? moment(this.state.start).format("YYYY-M-D").toString() : moment(this.props.event.start).format("YYYY-M-D").toString();
        startDateTime = new Date(`${date} ${value}`);
        duration = moment(this.props.event.end).diff(this.props.event.start, 'minutes');
        end = !!this.state.duration ? moment(startDateTime).add(this.state.duration, 'minutes').toDate() : moment(startDateTime).add(duration, 'minutes').toDate();
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

  handleChangeActOption = e => {
    const { value } = e.target;
    this.setState({actOption: value})
  }

  render() {
    return (
      <Composed singleEventId={this.props.id} updateCache={updateEventMethods.updateCache}>
        {({ allActs, updateEventMutation, toggleModalMutation, spring }) => {
          const { event } = this.props;
          const formattedDate = moment(event.start).format("YYYY-MM-DD");
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
                    <UpdateEvent 
                      loading={updateEventMutation.loading} 
                      event={event} 
                      handleChange={this.handleChange} 
                      notes={notes}
                      noteFieldCheck={this.state.notes} 
                      addNoteField ={this.addNoteField} 
                      formattedDate={formattedDate}
                      formattedTime={formattedTime}
                    />
                    <fieldset>
                      <label htmlFor="act">Act
                        <select name="actOption" defaultValue={this.state.actOption} onChange={this.handleChangeActOption}>
                          <option value="editExisting">Edit Existing Act</option>
                          <option value="change">Change To A Different Act</option>
                          <option value="new">Create New Act</option>
                        </select>                  
                      </label>
                    </fieldset>
                    {this.state.actOption === 'editExisting' && <UpdateAct event={event} handleChange={this.handleChange} uploadFile={this.uploadFile} image={this.state.image}/>}
                    {this.state.actOption === 'change' && <ChangeAct acts={acts} handleChange={this.handleChange} />}
                    {this.state.actOption === 'new' && <NewAct />}
                    <div>
                      <ul>
                        <li><OtherButton type="submit">Sav{updateEventMutation.loading ? 'ing' : 'e'} Changes</OtherButton></li>
                        <li><OtherButton onClick={this.props.toggle}>CREATE A REMINDER</OtherButton></li>
                      </ul>
                    </div>
                  </Form>
                </div>
          )
        }}
      </Composed>
    );
  }
}

export default QuickUpdate;

