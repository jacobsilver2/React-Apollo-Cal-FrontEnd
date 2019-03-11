import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { ALL_ACTS_QUERY, ALL_EVENTS_QUERY } from './globals/queries/queries';
import DeleteButton from './styles/DeleteEventButton';

const DELETE_ACT_MUTATION = gql`
  mutation DELETE_ACT_MUTATION($id: ID!) {
    deleteAct(id: $id) {
      id
    }
  }
`;

const ASSOCIATED_EVENTS_QUERY = gql`
  query ASSOCIATED_EVENTS_QUERY($id: ID!) {
    act(where: { id: $id }) {
      event{
        id
      }
    }
  }
`;


class DeleteAct extends Component {

  update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_ACTS_QUERY });
    data.acts = data.acts.filter(act => act.id !== payload.data.deleteAct.id);
    cache.writeQuery({ query: ALL_ACTS_QUERY, data });
  }

  alertMessage = data => {
    console.log(data)
    if (data.act.event) {
      return `There are ${data.act.event.length} events associated with this act.  Are you sure you want to do this?`
    }
    return "Are you sure you want to delete this act?"
  }

  render() {
    return (
      <Mutation mutation={DELETE_ACT_MUTATION} update={this.update} refetchQueries={[{ query: ALL_EVENTS_QUERY }]} variables={{ id: this.props.id }}>
        {(deleteAct, { error }) => (
          <Query query={ASSOCIATED_EVENTS_QUERY} variables={{ id: this.props.id }}>
            {({ data, error, loading }) => {
              const msg = this.alertMessage(data)
              return (
                <DeleteButton onClick={(e) => {
                  if (confirm(msg)) {
                    deleteAct().catch(err => {
                      alert(err.message);
                    });
                    Router.push({
                      pathname: '/'
                    })
                  }
                }}>
                  {this.props.children}
                </DeleteButton>)
            }}
          </Query>
        )}
      </Mutation>
    );
  }
}

export default DeleteAct;