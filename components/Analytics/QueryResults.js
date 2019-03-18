import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import * as momentFormat from '../../lib/momentFormatter';


const eventsQuery = gql`
  query eventsQuery($orderBy: EventOrderByInput!, $first: Int!) {
    events (orderBy: $orderBy first: $first){
      id 
      start
      draw
      status
      act {
        name
      }
  } 
}
`;

const QueryResults = ({orderBy, first}) => {
  return (
    <Query query={eventsQuery} variables={{ orderBy, first}}>
      {({data, loading, error}) => {

        const results = data.events.map(event => (
          <ul key={event.id}>
            <li>Date: {momentFormat.dayMonthDateYear(event.start)}</li>
            <li>Time: {momentFormat.timeTwelveHourWithAmPm(event.start)}</li>
            {event.act ? <li>Act: {event.act.name}</li> : <li>Act: TBA</li>}
            <li>Status: {event.status}</li>
            <li>Draw: {event.draw ? event.draw : 'Draw: No Reported Draw'}</li>
          </ul>
        ))

        return (
          <div>
            {results}
          </div>
        )
      }}

    </Query>
  );
}

export default QueryResults;