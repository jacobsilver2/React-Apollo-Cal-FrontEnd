import React, { Component } from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Act from './Act';
import Error from './ErrorMessage';


const ALL_ACTS_QUERY = gql`
  query ALL_ACTS_QUERY {
    acts {
      id
      name
      description
      image
      largeImage
      email
      notes
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ActsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Acts extends Component {
  
  render() {
    return (
      <Center>
        <Query query={ALL_ACTS_QUERY}>
          {({error, loading, data}) => {
            if (error) return <Error error={error} />
            if (loading) return <p>Loading</p>
            console.log(data.acts);
            const acts = data.acts;
            return (
              <ActsList>{acts.map(act => <Act act={act} key={act.id} />)}</ActsList>
            )
          }}
        </Query>
      </Center>
    );
  }
}


export {ALL_ACTS_QUERY};
export default Acts;
