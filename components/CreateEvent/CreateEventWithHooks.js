import React, {useState, useEffect} from 'react';
import { Mutation, Query } from 'react-apollo';
import moment from 'moment';
import { adopt } from 'react-adopt';
import { Spring } from 'react-spring/renderprops';
import Router from 'next/router';
import Form from '../styles/Form';
import Error from '../ErrorMessage';
import * as queries from '../globals/queries/queries';
import * as mutations from '../globals/mutations/mutations';
import {possibleStatus} from '../../lib/possibleStatus';
import Button from '../styles/SickButton';

const Composed = adopt({
  allActsQuery: ({render}) => <Query query={queries.ALL_ACTS_QUERY}>{render}</Query>,
  createEventWithNewActMutation: ({eventNewActUpdates, render}) => <Mutation variables={eventNewActUpdates} mutation={mutations.CREATE_EVENT_WITH_NEW_ACT_MUTATION} refetchQueries={[{ query: queries.ALL_EVENTS_QUERY }, { query: queries.ALL_ACTS_QUERY}]}>{render}</Mutation>,
  createEventWithExistingActMutation: ({eventExistingActUpdates, render}) => <Mutation variables={eventExistingActUpdates} mutation={mutations.CREATE_EVENT_WITH_EXISTING_ACT_MUTATION} refetchQueries={[{ query: queries.ALL_EVENTS_QUERY }, { query: queries.ALL_ACTS_QUERY}]}>{render}</Mutation>,
  spring: ({render}) => <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>{render}</Spring>,
});

const CreateEventWithHooks = () => {
  
  const [event, setEvent] = useState({
    duration: 45,
    title: moment(new Date()).format("MM-dd-YYYY"),
    status: 'CONFIRMED',
    start: new Date(),
    end: moment(new Date()).add(45, 'minutes').toDate(),
    allDay: false,
    notes: [''],
    name: '',
    image: '',
    largeImage: '',
    email: '',
    description: '',
    actId: '',
  });

  useEffect(() => {
    if (!Router.query.start) {
      return;
    };
    const decodedStart = decodeURIComponent(Router.query.start);
    const decodedEnd = decodeURIComponent(Router.query.end);
    setEvent({
      ...event,
      title: moment(new Date(decodedStart)).format("YYYY-MM-dd"),
      start: new Date(decodedStart),
      end: new Date(decodedEnd),
    });
  });

  function updateDate(e) {
    const { value } = e.target;
    const time = moment(event.start).format("H:MM");
    const start = new Date(`${value} ${time}`);
    const title = moment(value).format("YYYY-MM-DD");
    const end = moment(start).add(event.duration, 'minutes').toDate();
    setEvent({ ...event, start, title, end });
  }

  function addNoteField(e) {
    e.preventDefault();
    const notes = [...event.notes];
    notes.push('');
    setEvent({ ...event, notes });
  }
  
  function updateStatus(e) {
    const { value } = e.target;
    setEvent({ ...event, status: value })
  }

  function updateNotes(e) {
    const { value } = e.target;
    const notes = [...event.notes];
    const selectedIndex = parseInt(e.target.dataset.key);
    notes[selectedIndex] = value;
    setEvent({ ...event, notes });
  }

  function updateSelectExistingAct(e) {
    const { value } = e.target;
    setEvent({
      name: '',
      email: '',
      description: '',
      image: '',
      largeImage: '',
      actId: value,
      ...event
    });
  }

  function updateTime(e) {
    const { value } = e.target;
    const date = moment(event.start).format("YYYY-MM-dd");
    const start = new Date(`${date} ${value}`);
    const end = moment(start).add(event.duration).toDate();
    setEvent({ ...event, start, end });
  }

  function updateDuration(e) {
    const { value } = e.target;
    const duration = parseFloat(value);
    const end = moment(event.start).add(duration, 'minutes').toDate();
    setEvent({ ...event, duration, end });
  }

  function updateAllDay() {
    setEvent({ ...event, allDay: !event.allDay });
  }

  function updateEventDefault(e) {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value })
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
    setEvent({ ...event, image: file.secure_url, largeImage: file.eager[0].secure_url })
  }

  function renderNotes(notes) {
    return notes.map((note, index) => <textarea id="notes" key={index} data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={updateNotes} />)
  }

  const dateFormat = "yyyy-MM-dd";
  const timeFormat = "H:mm";
  const notes = renderNotes(event.notes);

  return (
    <Composed
      eventNewActUpdates={{ title: event.title, status: event.status, start: event.start, end: event.end, allDay: event.allDay, notes: event.notes, name: event.name, image: event.image, largeImage: event.largeImage, email: event.email, description: event.description, }}
      eventExistingActUpdates={{ title: event.title, status: event.status, start: event.start, end: event.end, allDay: event.allDay, notes: event.notes, actId: event.actId }}
    >
      {({ allActsQuery, createEventWithNewActMutation, createEventWithExistingActMutation, spring }) => {
        if (allActsQuery.loading) return <p>Loading...</p>;
        return (
          <div style={spring}>
            <Form onSubmit={async (e) => {
              e.preventDefault();
              const res = !event.actId ? await createEventWithNewActMutation() : await createEventWithExistingActMutation();
              Router.push({
                pathname: '/'
              })
            }}>
              <Error error={allActsQuery.error} />
              <fieldset disabled={allActsQuery.loading} aria-busy={allActsQuery.loading}>
                <label htmlFor="date">
                  Date
                  <input type="date" id="date" name="date" placeholder="Date" value={moment(event.start).format(dateFormat)} onChange={updateDate} />
                </label>

                <label htmlFor="time">
                  Time
                  <input type="time" id="time" name="time" placeholder={moment(event.start).add(20, 'hours').format(timeFormat)} value={moment(event.start).format(timeFormat)} onChange={updateTime} />
                </label>

                <label htmlFor="duration">
                  Duration (minutes)
                  <input type="number" id="duration" name="duration" placeholder="45" value={event.duration} onChange={updateDuration} />
                </label>

                <label htmlFor="status">
                  Status
                  <select name="status" defaultValue={event.status} onChange={updateStatus}>
                    {possibleStatus.map(status => <option key={status} value={status}>{status}</option>)}
                  </select>
                </label>

                <label>
                  All Day
                  <input type="checkbox" id="allday" name="allday" checked={event.allDay} onChange={updateAllDay} />
                </label>

                <label htmlFor="notes">
                  Notes
                  {notes}
                  <button onClick={addNoteField}>&#43;</button>
                </label>
              </fieldset>

              <fieldset>
                <label htmlFor="acts">
                  Select An Act Already In The Database
                  <select name="select-existing-act" defaultValue="" onChange={updateSelectExistingAct}>
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
                  <input type="text" id="name" name="name" placeholder="Name" disabled={!!event.actId} required={!event.actId} value={event.name} onChange={updateEventDefault} />
                </label>

                <label htmlFor="description">
                  Description
                  <textarea id="description" name="description" placeholder="Enter A Description" disabled={!!event.actId} required={!event.actId} value={event.description} onChange={updateEventDefault} />
                </label>

                <label htmlFor="email">
                  Email
                  <input type="email" id="email" name="email" placeholder="email" disabled={!!event.actId} required={!event.actId} value={event.email} onChange={updateEventDefault} />
                </label>

                <label htmlFor="file">
                  Image
                  <input type="file" id="file" name="file" disabled={!!event.actId} placeholder="Upload an image" onChange={uploadFile} />
                  {event.image && <img src={event.image} alt="Upload Preview" width="200" />}
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

export default CreateEventWithHooks;

