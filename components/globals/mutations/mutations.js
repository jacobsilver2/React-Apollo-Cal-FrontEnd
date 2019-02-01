import gql from 'graphql-tag';


export const TOGGLE_MODAL_MUTATION = gql`
  mutation {
    toggleModal @client
  }
`;

export const UPDATE_EVENT_MUTATION = gql`
  mutation UPDATE_EVENT_MUTATION(
      $id: ID!
      $title: String
      $status: EventStatus
      $start: DateTime
      $end: DateTime
      $allDay: Boolean
      $notes: [String!]
      $draw: Int
      $name: String
      $description: String
      $email: String
      $image: String
      $largeImage: String
      $actId: String
      $newActId: String
  ) {
    updateEvent(
      id: $id
      title: $title
      status: $status
      start: $start
      end: $end
      allDay: $allDay
      notes: $notes
      draw: $draw
      name: $name
      description: $description
      email: $email
      image: $image
      largeImage: $largeImage
      actId: $actId
      newActId: $newActId
    ) {
      id
      start
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


export const MOVE_EVENT_MUTATION = gql`
  mutation MOVE_EVENT_MUTATION($id: ID!, $start: DateTime, $end: DateTime, $allDay: Boolean) {
    moveEvent(id: $id, start: $start, end: $end, allDay: $allDay) {
      id
      start
      end
    }
  }
`;

export const CREATE_EVENT_WITH_NEW_ACT_MUTATION = gql`
  mutation CREATE_EVENT_WITH_NEW_ACT_MUTATION(
      $title: String!
      $status: EventStatus!
      $start: DateTime!
      $end: DateTime!
      $allDay: Boolean!
      $notes: [String!]
      $name: String
      $email: String
      $description: String
      $image: String
      $largeImage: String
      $actId: String
  ) {
    createEventWithNewAct( 
        title: $title
        status: $status
        start: $start
        end: $end
        allDay: $allDay
        notes: $notes
        name: $name
        email: $email
        description: $description
        image: $image
        largeImage: $largeImage
        actId: $actId
    ) 
    { 
      id
      act {
        id
      }
    }
  }
`;


export const CREATE_EVENT_WITH_EXISTING_ACT_MUTATION = gql`
  mutation CREATE_EVENT_WITH_EXISTING_ACT_MUTATION(
    $title: String
    $status: EventStatus!
    $start: DateTime!
    $end: DateTime!
    $allDay: Boolean!
    $notes: [String!]
    $actId: String
  ){
    createEventWithExistingAct(
      title: $title
      status: $status
      start: $start
      end: $end
      allDay: $allDay
      notes: $notes
      actId: $actId
    ){
      id
      act {
        id
      }
    }
  }
`;

export const CREATE_ACT_MUTATION = gql`
  mutation CREATE_ACT_MUTATION(
      $name: String!
      $description: String
      $image: String
      $largeImage: String
      $email: String
      $notes: [String!]
  ) {
    createAct(
      name: $name
      description: $description
      image: $image
      largeImage: $largeImage
      email: $email
      notes: $notes
    ) {
      id
    }
  }
`;