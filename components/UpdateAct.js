import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import Error from './ErrorMessage';

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
  mutation UPDATE_ACT_MUTATION($id: ID!, $name: String, $description: String, $image: String, $largeImage: String, $notes: String) {
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

  // if a new image has been added, it will be put in state and previewed.
  // otherwise, the image preview will be from the query
  renderPreview = (data) => {
    if (this.state.image) {
      return (
        <img src={this.state.image} alt="Upload Preview" width="200"/>
      )
    } 
      this.setState({
        image: data.act.image
      })
      return (
        <img src={data.act.image} alt="Upload Preview" width="200"/>
      )  
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
        if (loading) return <p>Loading...</p>;
        if (!data.act) return <p>No Act Found for ID {this.props.id}</p>;
        return (
          <Mutation mutation={UPDATE_ACT_MUTATION} variables={this.state}>
            {(updateAct, { loading, error }) => (
              <Form onSubmit={e => this.updateAct(e, updateAct)}>
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
                      defaultValue={data.act.name}
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
                      defaultValue={data.act.email}
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
                      defaultValue={data.act.description}
                      onChange={this.handleChange}
                    />
                  </label>

                  <label htmlFor="notes">
                    Notes
                    <textarea
                      id="notes"
                      name="notes"
                      placeholder="Enter Your Notes"
                      defaultValue={data.act.notes}
                      onChange={this.handleChange}
                    />
                  </label>

                  <label htmlFor="file">
                    Image
                    <input type="file" id="file" name="file" placeholder="Upload an image" onChange={this.uploadFile}/>
                    {this.renderPreview(data)}
                  </label>
                  <button type="submit">Sav{loading ? 'ing' : 'e'} Changes</button>
                </fieldset>
              </Form>
            )}
          </Mutation>
        );
      }}
    </Query>      
    );
  }
}

export { UPDATE_ACT_MUTATION, SINGLE_ACT_QUERY };
export default UpdateAct;