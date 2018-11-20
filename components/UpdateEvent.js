import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import Error from './ErrorMessage';

const SINGLE_EVENT_QUERY = gql`
  query SINGLE_EVENT_QUERY($id: ID!) {
    event(where: {id: $id}) {
      id
      title
      description
      date
    }
  }
`;



const UPDATE_EVENT_MUTATION = gql`
  mutation UPDATE_EVENT_MUTATION(
      $id: ID!
      $title: String
      $description: String
      $date: DateTime
  ) {
    updateEvent(
      id: $id
      title: $title
      description: $description
      date: $date
    ) {
      id
      title
      description
      date
    }
  }
`;

class UpdateEvent extends Component {
  state = {}

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val
    })
  }

  updateEvent = async (e, updateEventMutation) => {
    e.preventDefault();
    console.log('updating event');
    console.log(this.state);
    const res = await updateEventMutation({
      variables: {
        id: this.props.id,
        ...this.state
      },
    });
    console.log('updated');
  }


  render() {
    return (
      <Query query={SINGLE_EVENT_QUERY} variables={{id: this.props.id}}>
        {({data, loading}) => {
          if (loading) return <p>Loading...</p>
          if (!data.event) return <p>No Event Found for ID {this.props.id}</p>
          return (
            <Mutation mutation={UPDATE_EVENT_MUTATION} variables={this.state}>
              {(updateEvent, { loading, error }) => (
                <Form onSubmit={e => this.updateEvent(e, updateEvent)}>
                  <Error error={error} />
              
                  <fieldset disabled={loading} aria-busy={loading}>

                    <label htmlFor="title">
                      Title
                      <input type="text" id="title" name="title" placeholder="Title" required defaultValue={data.event.title} onChange={this.handleChange}/>
                    </label>
              
                    <label htmlFor="date">
                      Date
                      <input type="date" id="date" name="date" placeholder="Date" required defaultValue={data.event.date} onChange={this.handleChange}/>
                    </label>
              
                    <label htmlFor="description">
                      Description
                      <textarea id="description" name="description" placeholder="Enter A Description" required defaultValue={data.event.description} onChange={this.handleChange}/>
                    </label>
              
                    <button type="submit">Sav{loading ? 'ing' : 'e'} Changes</button>

                  </fieldset>
                </Form>      
              )}
            </Mutation>
          )
        }}
      </Query>
    );
  }
}

export { UPDATE_EVENT_MUTATION, SINGLE_EVENT_QUERY };
export default UpdateEvent;