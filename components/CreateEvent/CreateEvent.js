import React, { Component } from 'react';
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
import Center from '../styles/Center';
import CreateEventForm from './CreateEventForm';
import SelectExistingActForm from './SelectExistingActForm';
import NewActForm from './NewActForm';
import ActViewPicker from './ActViewPicker';
import Container from '../styles/Container';



const Composed = adopt({
  allActsQuery: ({render}) => <Query query={queries.ALL_ACTS_QUERY}>{render}</Query>,
  createEventWithNewActMutation: ({eventNewActUpdates, render}) => <Mutation variables={eventNewActUpdates} mutation={mutations.CREATE_EVENT_WITH_NEW_ACT_MUTATION} refetchQueries={[{ query: queries.ALL_EVENTS_QUERY }, { query: queries.ALL_ACTS_QUERY}]}>{render}</Mutation>,
  createEventWithExistingActMutation: ({eventExistingActUpdates, render}) => <Mutation variables={eventExistingActUpdates} mutation={mutations.CREATE_EVENT_WITH_EXISTING_ACT_MUTATION} refetchQueries={[{ query: queries.ALL_EVENTS_QUERY }, { query: queries.ALL_ACTS_QUERY}]}>{render}</Mutation>,
  spring: ({render}) => <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>{render}</Spring>,
})

class CreateEvent extends Component {
  state = {
      duration: 45,
      title: moment(new Date()).format('YYYY-MM-DD'),
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
      actView: 'new',
  }

  componentDidMount() {
    if (Router.query.start) {
      const decodedStart = decodeURIComponent(Router.query.start);
      const decodedEnd = decodeURIComponent(Router.query.end);
      this.setState({
        title: moment(decodedStart).format("YYYY-MM-DD"),
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
        const time = moment(this.state.start).format("HH:mm");
        let startDateTime = new Date(`${value} ${time}`);
        const title = moment(value).format('YYYY-MM-DD');
        let end = moment(startDateTime).add(this.state.duration, 'minutes').toDate();
        this.setState({ start: startDateTime, title, end });
        break;
      case 'time':
        const date = moment(this.state.start).format("YYYY-MM-DD");
        startDateTime = new Date(`${date} ${value}`);
        end = moment(startDateTime).add(this.state.duration, 'minutes').toDate();
        this.setState({ start: startDateTime, end });
        break;
      case 'number':
        const val = parseFloat(value);
        end = moment(this.state.start).add(val, 'minutes').toDate()
        this.setState({duration: val, end})
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

  handleActViewChange = (e, value) => {
    e.preventDefault();
    this.setState({actView: value})
  }

  render() {
    const dateFormat="YYYY-MM-DD"
    const timeFormat="HH:mm"
    const notes = this.state.notes.map((note, index) => {
      return <textarea id="notes" key={index} data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={this.handleChange}/>
    })
    return (
      <Container>
      <Composed 
        eventNewActUpdates={{title: this.state.title, status: this.state.status, start: this.state.start, end: this.state.end, allDay: this.state.allDay, notes: this.state.notes, name: this.state.name, image: this.state.image, largeImage: this.state.largeImage, email: this.state.email, description: this.state.description,}}
        eventExistingActUpdates={{title: this.state.title,  status: this.state.status, start: this.state.start, end: this.state.end, allDay: this.state.allDay ,notes: this.state.notes, actId: this.state.actId}}
        >
          {({ allActsQuery, createEventWithNewActMutation, createEventWithExistingActMutation, spring }) => {
            if (allActsQuery.loading) return <p>Loading...</p>;
            return (
              <div style={spring}>
                <Form onSubmit={async (e) => {
                  e.preventDefault();
                  const res = !this.state.actId ? await createEventWithNewActMutation() : await createEventWithExistingActMutation();
                  Router.push({
                    pathname: '/'
                  })
                }}>
                  <Error error={allActsQuery.error} />
                  <CreateEventForm
                    loading={allActsQuery.loading}
                    dateFormat={dateFormat}
                    timeFormat={timeFormat}
                    values={this.state}
                    notes={notes}
                    handleChange={this.handleChange}
                    addNoteField={this.addNoteField}
                    possibleStatus={possibleStatus}
                  />
                  <div>
                    {this.state.actView === 'new' && <NewActForm values={this.state} handleChange={this.handleChange} uploadFile={this.uploadFile} />}
                    {this.state.actView === 'existing' && <SelectExistingActForm handleChange={this.handleChange} acts={allActsQuery.data.acts} />}
                    <ActViewPicker active={this.state.actView} change={this.handleActViewChange} />
                  </div>
                  <fieldset>
                    <div style={{ height: '85%' }}></div>
                    <Center>
                      <Button type="submit">Submit</Button>
                    </Center>
                  </fieldset>
                </Form>
              </div>
            )
          }}
        </Composed>
      </Container>
    );
  }
}

export default CreateEvent;