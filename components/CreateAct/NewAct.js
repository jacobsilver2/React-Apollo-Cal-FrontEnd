import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { adopt } from 'react-adopt';
import Dropzone from 'react-dropzone'
import { Spring } from 'react-spring/renderprops'
import Router from 'next/router';
import Form from '../styles/Form';
import Error from '../ErrorMessage';
import CreateActForm from './CreateActForm';
import * as mutations from '../globals/mutations/mutations';
import Container from '../styles/Container';

const Composed = adopt({
  createAct: ({updates, render}) => <Mutation mutation={mutations.CREATE_ACT_MUTATION} variables={updates}>{render}</Mutation>,
  spring: ({render}) => <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>{render}</Spring>,
  dropzone: ({onDrop, render}) => <Dropzone accept="image/*" onDrop={onDrop} multiple={false}>{render}</Dropzone>
})


class CreateAct extends Component {
  state = {
    name: '',
    description: '',
    image: '',
    largeImage: '',
    email: '',
    notes: [''],
  }


  // update = (cache, payload) => {
  //   // manually update the cache on the client, so it matches the server

  //   // 1. Read the events in the cache
  //   const data = cache.readQuery({ query: ALL_EVENTS_QUERY })
    
  //   // 2. Add the new event to the events
  //   data.events = data.events.push(payload.data);

  //   // 3. Put the items back
  //   cache.writeQuery( {query: ALL_EVENTS_QUERY, data });
  // }

  handleChange = (e) => {
    const { name, type, value } = e.target;
    // const val = type === 'number' ? parseFloat(value) : value;
    let val = value;

    if (type === 'number') {
      val = parseFloat(value);
    }

    if (name === 'notes') {
      const notes = [...this.state.notes];
      const selectedIndex = parseInt(e.target.dataset.key);
      notes[selectedIndex] = value;
      return this.setState({ notes });
    }

    this.setState({
      [name]: val
    })
  }

    uploadFile = async (files) => {
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
    const notes = this.state.notes.map((note, index) => {
      return <textarea id="notes" key={index} data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={this.handleChange}/>
    })
    return (
      <Container>
        <Composed updates={this.state} onDrop={this.uploadFile}>
          {({ createAct, spring, dropzone }) => (
            <div style={spring}>
              <Form onSubmit={async (e) => {
                e.preventDefault();
                const res = await createAct();
                Router.push({
                  pathname: '/'
                })
              }}>
                <Error error={createAct.error} />
                <div></div>
                <div>
                  <h2>Create A New Act</h2>
                  <CreateActForm
                    loading={createAct.loading}
                    act={this.state}
                    handleChange={this.handleChange}
                    notes={notes}
                    addNoteField={this.addNoteField}
                    dropzone={dropzone}
                  />
                </div>
              </Form>
            </div>
          )}
        </Composed>
      </Container>
    );
  }
}


export default CreateAct;