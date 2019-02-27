import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag'; 
import Router from 'next/router';
import { ALL_EVENTS_QUERY } from './globals/queries/queries';

const DELETE_EVENT_MUTATION = gql`
  mutation DELETE_EVENT_MUTATION($id: ID!) {
    deleteEvent(id: $id) {
      id
    }
  }
`;

class DeleteEvent extends Component {
  update = (cache, payload) => {
    // manually update the cache on the client, so it matches the server

    // 1. Read the events in the cache
    const data = cache.readQuery({ query: ALL_EVENTS_QUERY })
    
    // 2. Filter the deleted event out of the page
    data.events = data.events.filter(event => event.id !== payload.data.deleteEvent.id);

    // 3. Put the items back
    cache.writeQuery( {query: ALL_EVENTS_QUERY, data });
  }
  render() {
    return (
      <Mutation mutation={DELETE_EVENT_MUTATION} update={this.update} variables={{id: this.props.id} }>
        {(deleteEvent, {error}) => (
          <button onClick={() => {
            if(confirm("Are you sure you want to delete this event?")) {
              deleteEvent().catch(err => {
                alert(err.message);
              });
              this.props.toggleModalMutation();
              Router.push({
                pathname: '/'
              })
            }
          }}>{this.props.children}</button>
        )
        }
      </Mutation>
    );
  }
}

export { DELETE_EVENT_MUTATION, }
export default DeleteEvent;