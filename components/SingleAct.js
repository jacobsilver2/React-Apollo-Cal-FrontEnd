import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';

const SingleActStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const SINGLE_ACT_QUERY = gql`
  query SINGLE_ACT_QUERY($id: ID!) {
    act(where: { id: $id }) {
      id
      name
      description
      largeImage
      email
      notes
    }
  }
`;
class SingleAct extends Component {
  render() {
    return (
      <Query
        query={SINGLE_ACT_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.act) return <p>No Act Found for {this.props.id}</p>;
          const act = data.act;
          return (
            <SingleActStyles>
              <Head>
                <title>React-Apollo-Calendar | {act.name}</title>
              </Head>
              <img src={act.largeImage} alt={act.name} />
              <div className="details">
                <h2>{act.name}</h2>
                <p>{act.description}</p>
                <p>{act.email}</p>
                <p>{act.notes}</p>
              </div>
            </SingleActStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleAct;
export { SINGLE_ACT_QUERY };
