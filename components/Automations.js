import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import {SINGLE_EVENT_QUERY} from './globals/queries/queries';
import Router from 'next/router';


class Automations extends Component {

  
  render() {

    return (
      <Query query={SINGLE_EVENT_QUERY} variables={{id: decodeURIComponent(Router.query.id)}}>
        {({data, loading}) => {
          if (loading) return <p>Loading...</p>
          if (!data.event) return <p>No Event Found for ID {Router.query.id}</p>;
          const {event} = data;
          return (
            <div>
              <h1>Welcome to the brand new Automations page!</h1>
              <p>Currently viewing info for {event.act.name || event.title}</p>
            </div>
          )
        }}
      </Query>
    );
  }
}

export default Automations;