import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


const eventsDraw = gql`
  query eventsDraw($orderBy: EventOrderByInput!, $first: Int!) {
    events (orderBy: $orderBy first: $first){
      id 
      start
      draw
      act {
        name
      }
  } 
}
`;

const QueryResults = ({orderBy, first}) => {
  return (
    <Query query={eventsDraw} variables={{ orderBy, first}}>
      {({data, loading, error}) => {
        
        const results = data.events.map(event => <ul key={event.id}><li>{event.start}</li><li>{event.draw}</li></ul>)
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