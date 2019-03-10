import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
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

class DeleteAct extends Component {

  update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_ACTS_QUERY });
    data.acts = data.acts.filter(act => act.id !== payload.data.deleteAct.id);
    cache.writeQuery({ query: ALL_ACTS_QUERY, data });
  }
  
  render() {
    return (
      <Mutation mutation={DELETE_ACT_MUTATION} update={this.update} refetchQueries={[{ query: ALL_EVENTS_QUERY }]} variables={{ id: this.props.id }}>
      {(deleteAct, { error }) => (
        <DeleteButton onClick={(e) => {
          if (confirm("Are you shure you want to delete this act?")) {
            console.log(deleteAct);
            deleteAct().catch(err => {
              alert(err.message);
            });
            Router.push({
              pathname: '/'
            })
          }
        }}>
          {this.props.children}
        </DeleteButton>
      )}
    </Mutation>
    );
  }
}

export default DeleteAct;