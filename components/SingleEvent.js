import React, { Component } from 'react';
import { Query} from 'react-apollo';
import gql from 'graphql-tag';
// import {SINGLE_EVENT_QUERY} from './UpdateEvent';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';

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


class SingleEvent extends Component {
  render() {
    return (
        <Query query={SINGLE_EVENT_QUERY} variables={this.props.id}>
          {({data, loading}) => {
            if (loading) return <p>Loading</p>
            
            return (
              <ItemStyles>
                { data.event.image && <img src={data.event.image} alt={data.event.title}/> }
                <Title>{data.event.title}</Title>
              </ItemStyles>
            )
          }}
        </Query>
    );
  }
}

export default SingleEvent;