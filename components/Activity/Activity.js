import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import Ticker from './Ticker';

const EVENTS_QUERY = gql`
query ALL_EVENTS {
  events {
    title
  }
}
`;

const EVENTS_SUB = gql`
  subscription{
    events{
      title
    }
  }
`;


const Activity = () => {
  return (
    <Query query={EVENTS_QUERY}>
      {({subscribeToMore, ...result}) => {

        return (
          <Ticker {...result} subscribeToNewEvents={()=>
            subscribeToMore({
              document: EVENTS_SUB,
            //   updateQuery: (prev, { subscriptionData }) => {
            //   if (!subscriptionData.data) return prev;
            //   const newFeedItem = subscriptionData.data.events;
            //   console.log(prev)
            //   return Object.assign({}, prev, {
            //       events: [newFeedItem, ...prev.events]
            //   });
            // },
            })
          }/>
        )

      }}
    </Query>
  );
}

export default Activity;