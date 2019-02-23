import React, { useState } from 'react';
import { Mutation, Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import { Spring } from 'react-spring/renderprops.cjs';
import moment from 'moment';
import Error from './ErrorMessage';
import Form from './styles/QuickUpdateFormStyles';
import Button from './styles/DeleteButtonStyles';
import OtherButton from './styles/SickButton';
import * as mutations from './globals/mutations/mutations';
import * as queries from './globals/queries/queries';
import * as updateEventMethods from './globals/functions/updateEventMethods';
import { possibleStatus } from '../lib/possibleStatus';

const Composed = adopt({
  allActs: ({ render }) => <Query query={queries.ALL_ACTS_QUERY}>{render}</Query>,
  updateEventMutation: ({ updates, render }) => <Mutation mutation={mutations.UPDATE_EVENT_MUTATION} variables={updates} refetchQueries={[{ query: queries.ALL_EVENTS_QUERY}]}>{render}</Mutation>,
  toggleModalMutation: ({ render }) => <Mutation mutation={mutations.TOGGLE_MODAL_MUTATION}>{render}</Mutation>,
  spring:({render}) => <Spring from={{ opacity: 0, marginTop: -500 }} to={{ opacity: 1, marginTop: 0 }} config={{ duration: 250}}>{render}</Spring>,
});

const QuickUpdateFormWithHooks = (props) => {
  const [update, setUpdate] = useState({});

  function updateStatus(e) {
    const { value } = e.target;
    setUpdate({...update, status: value})
  }

  function updateSelectExistingAct(e) {
    const { value } = e.target;
    setUpdate({ ...update, actId: value, name: '', email: '', description: '', image: '', largeImage: '' });
  }

  function updateDuration(e) {
    const { value } = e.target;
    let val = parseFloat(value);
    setUpdate({...update, duration: val, end: update.hasOwnProperty('start') ? moment(update.start).add(val, 'minutes').toDate() : moment(props.event.start).add(val, 'minutes').toDate() });
  }

  function updateDraw(e) {
    const { name, value } = e.target;
    const val = parseFloat(value);
    setUpdate({...update, [name]: value });
  }

  function updateNotes(e) {
    const { value } = e.target;
    const notes = [...update.notes];
    const selectedIndex = parseInt(e.target.dataset.key);
    notes[selectedIndex] = value;
    setUpdate({...update, notes})
  }

  function updateDatewithNullState(e) {
    const { value } = e.target;
    let duration = moment(props.event.end).diff(props.event.start, 'minutes');
    const startTime = moment(props.event.start).format("hh:mm");
    let startDateTime = new Date(`${value} ${startTime}`);
    let end = moment(startDateTime).add(duration, 'minutes').toDate();
    const title = moment(value).format("YYYY-M-D");
    setUpdate({ ...update, start: startDateTime, title, end, duration })
  }

  function updateDate(e) {
    const { name, type, value } = e.target;
    if (!update.hasOwnProperty('start')) {
      updateDatewithNullState(e);
      return;
    }
    const startTime = moment(update.start).format('hh:mm');
    let startDateTime = new Date(`${value} ${startTime}`);
    const title = moment(value).format("YYYY-M-D");
    let end = moment(startDateTime).add(update.duration, 'minutes').toDate();
    setUpdate({ ...update, start: startDateTime, title, end })
  }

  function updateTime(e) {
    const { name, type, value } = e.target;
    const date = update.hasOwnProperty('start') ? moment(update.start).format("YYYY-M-D").toString() : moment(props.event.start).format("YYYY-M-D").toString();
    const startDateTime = new Date(`${date} ${value}`);
    const duration = moment(props.event.end).diff(props.event.start, 'minutes');
    const end = update.hasOwnProperty('duration') ? moment(startDateTime).add(update.duration, 'minutes').toDate() : moment(startDateTime).add(duration, 'minutes').toDate();
    setUpdate({...update, start: startDateTime, end });
  }

  function updateCheckbox(e) {
    const allDay = update.hasOwnProperty('allDay') ? !update.allDay ? !props.allDay;
    setUpdate({ ...update, allDay });
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
  }

  function addNote(notes) {
    setUpdate({ ...update, notes})
  }

  function addNoteField(e, notes) {
    e.preventDefault();
    if (notes){
      const notesCopy = [...notes];
      notesCopy.push('')
      return addNote({notes: notesCopy});
    }
    const notesCopy = [...update.notes];
    notesCopy.push('');
    addNote(notesCopy);
  };

  function handleDeleteNote(e, index, notes) {
    e.preventDefault();
    if (notes){
      const notesCopy = [...notes];
      const notesFiltered = notesCopy.filter((note, i) => i !== index );
      return setUpdate({ ...update, notes: notesFiltered});
    }
    const notesCopy = [...update.notes];
    const notesFiltered = notesCopy.filter((note, i) => i != index );
    return setUpdate({ ...update, notes: notesFiltered});    
  }

  async function uploadFile(e) {
    const files = e.target.files;  
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'react-apollo-cal');
    const res = await fetch('https://api.cloudinary.com/v1_1/dlskxwzm6/image/upload', {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    setUpdate({
      ...update,
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    })
  }

  async function (e, updateEventMutation, closeModal) {
    e.preventDefault();
    const res = await updateEventMutation({
      variables: {
        id: props.event.id,
        ...update,
      },
    });
    await closeModal();
  }

  return (
    
  );
}

export default QuickUpdateFormWithHooks;