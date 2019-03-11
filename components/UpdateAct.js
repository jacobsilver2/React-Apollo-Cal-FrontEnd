import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

import Form from './styles/Form';
import Error from './ErrorMessage';
import Button from './styles/DeleteButtonStyles';
import SickButton from './styles/SickButton';
import DeleteAct from './DeleteAct';
import Container from './styles/Container';

import { ImageContainer } from './styles/DropzoneStyles';

const ActContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`;

const SingleColumnForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr
`;

const ActDndStyles = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr;
`;

const ActPreviewStyles = styled.div`
  width: 50%;
  height: 50%;
`;

const SINGLE_ACT_QUERY = gql`
  query SINGLE_ACT_QUERY($id: ID!) {
    act(where: { id: $id }) {
      id
      name
      email
      description
      image
      largeImage
      notes
    }
  }
`;
const UPDATE_ACT_MUTATION = gql`
  mutation UPDATE_ACT_MUTATION($id: ID!, $name: String, $description: String, $image: String, $largeImage: String, $notes: [String!]) {
    updateAct(id: $id, name: $name, description: $description, image: $image, largeImage: $largeImage, notes: $notes) {
      id
      name
      email
      description
      image
      largeImage
      notes
    }
  }
`;

class UpdateAct extends Component {
  state = {
    image: ''
  }

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
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

  updateAct = async (e, updateActMutation) => {
    e.preventDefault();
    const res = await updateActMutation({
      variables: {
        id: this.props.id,
        ...this.state
      },
    });
    Router.push({
      pathname: '/'
    });
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

  // if a new image has been added, it will be put in state and previewed.
  // otherwise, the image preview will be from the query
  renderPreview = (data) => {
    if (this.state.image) {
      return (
        <img src={this.state.image} alt="Upload Preview" width="200" />
      )
    }
    this.setState({
      image: data.act.image
    })
    return (
      <img src={data.act.image} alt="Upload Preview" width="200" />
    )
  }

  handleDeleteNote = (e, index, notes) => {
    e.preventDefault();
    if (notes) {
      const notesCopy = [...notes];
      const notesFiltered = notesCopy.filter((note, i) => i !== index);
      return this.setState({ notes: notesFiltered });
    }
    const notesCopy = [...this.state.notes];
    const notesFiltered = notesCopy.filter((note, i) => i != index);
    return this.setState({ notes: notesFiltered });
  }

  addNoteField = (e, notes) => {
    e.preventDefault();
    if (notes) {
      const notesCopy = [...notes];
      notesCopy.push('')
      return this.setState({ notes: notesCopy });
    }
    const notesCopy = [...this.state.notes];
    notesCopy.push('');
    return this.setState({ notes: notesCopy });
  }


  render() {

    return (
      <Query
        query={SINGLE_ACT_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ data, loading }) => {
          const { act } = data;
          if (loading) return <p>Loading...</p>;
          if (!data.act) return <p>No Act Found for ID {this.props.id}</p>;

          let notes = null;
          if (this.state.notes) {
            notes = this.state.notes.map((note, index) => <div key={index}><textarea id="notes" data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={this.handleChange} /><Button onClick={(e) => this.handleDeleteNote(e, index)}>-</Button></div>)
          } else if (act.notes.length > 0) {
            notes = act.notes.map((note, index) => <div key={index}><textarea id="notes" data-key={index} name="notes" placeholder="Enter A Note" value={note} onChange={this.handleChange} disabled /> <Button onClick={(e) => this.handleDeleteNote(e, index, act.notes)}>-</Button></div>)
          }

          return (
            <ActContainer>
              <div></div>
              <Mutation mutation={UPDATE_ACT_MUTATION} variables={this.state}>
                {(updateAct, { loading, error }) => (
                  <SingleColumnForm onSubmit={e => this.updateAct(e, updateAct)}>
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                      <label htmlFor="name">
                        Name
                    <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Name"
                          required
                          defaultValue={act.name}
                          onChange={this.handleChange}
                        />
                      </label>

                      <label htmlFor="name">
                        Email
                    <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          required
                          defaultValue={act.email}
                          onChange={this.handleChange}
                        />
                      </label>

                      <label htmlFor="description">
                        Description
                    <input
                          type="text"
                          id="description"
                          name="description"
                          placeholder="Description"
                          defaultValue={act.description}
                          onChange={this.handleChange}
                        />
                      </label>

                      <label htmlFor='notes'>
                        Notes
                    {notes}
                        <Button onClick={(e) => this.addNoteField(e, this.state.notes ? null : act.notes)}>&#43;</Button>
                      </label>
                      <Dropzone onDrop={this.uploadFile}>
                        {({ getRootProps, getInputProps, isDragActive, isDragReject, isDragAccept }) => (
                          <ActDndStyles>
                            <ImageContainer isDragActive={isDragActive} isDragReject={isDragReject} {...getRootProps()}>
                              <input {...getInputProps()} />
                              {isDragAccept ? 'Drop' : 'Drag'} image here...
                          </ImageContainer>
                            <ActPreviewStyles> {this.renderPreview(data)} </ActPreviewStyles>
                          </ActDndStyles>
                        )}
                      </Dropzone>
                      <SickButton type="submit">{loading ? <ClipLoader /> : 'Save Changes'}</SickButton>
                      <DeleteAct id={act.id}>Delete Act</DeleteAct>
                    </fieldset>
                  </SingleColumnForm>

                )}
              </Mutation>
              <div></div>
            </ActContainer>
          );
        }}
      </Query>
    );
  }
}

export { UPDATE_ACT_MUTATION, SINGLE_ACT_QUERY };
export default UpdateAct;