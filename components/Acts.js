import React, { Component } from 'react';
import {Query} from 'react-apollo';
import styled from 'styled-components';
import Act from './Act';
import Error from './ErrorMessage';
import * as queries from './globals/queries/queries';
import Pagination from './Pagination';
import { perPage } from '../config';


const Center = styled.div`
  text-align: center;
`;

const ActsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Acts extends Component {
  
  render() {
    return (
      <Center>
        <Pagination page={this.props.page}/>
        <Query query={queries.ALL_ACTS_QUERY_PAGINATION} variables={{skip: this.props.page*perPage-perPage}}>
          {({error, loading, data}) => {
            if (error) return <Error error={error} />
            if (loading) return <p>Loading</p>
            const acts = data.acts;
            return (
              <ActsList>{acts.map(act => <Act act={act} key={act.id} />)}</ActsList>
            )
          }}
        </Query>
        <Pagination page={this.props.page}/>
      </Center>
    );
  }
}


export default Acts;
