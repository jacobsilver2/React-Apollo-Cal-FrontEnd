import gql from 'graphql-tag';

 export const ALL_EVENTS_QUERY = gql`
  query ALL_EVENTS_QUERY {
    events {
      id
      title
      status
      start
      end
      allDay
      notes
      draw
      act {
        id
        name
        description
        notes
        image
      }
    }
  }
`;

export const SINGLE_EVENT_QUERY = gql`
  query SINGLE_EVENT_QUERY($id: ID!) {
    event(where: {id: $id}) {
      id
      title
      status
      start
      end
      allDay
      notes
      draw
      act {
        id
        name
        description
        email
        image
        largeImage
      }
    }
  }
`;

export const ALL_ACTS_QUERY = gql`
  query ALL_ACTS_QUERY {
    acts {
      id
      name
      description
      image
      largeImage
      email
      notes
      event{
        id
        title
        draw
      }
    }
  }
`;

export const LOCAL_STATE_QUERY = gql`
  query {
    modalOpen @client
  }
`;




