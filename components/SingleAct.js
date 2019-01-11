import React, { Component } from 'react';
import gql from 'graphql-tag';
import Link from 'next/link'
import { format, isBefore, isAfter } from 'date-fns';
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
  a {
    cursor: pointer;
  }
  h3 {
    text-decoration: underline;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
  .shows {
    margin: 1rem;
    font-size: 1rem;
  }
`;

const SINGLE_ACT_QUERY = gql`
  query SINGLE_ACT_QUERY($id: ID!) {
    act(where: { id: $id }) {
      id
      name
      description
      image
      email
      notes
      event{
        id
        start
      }
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
          const pastShows = act.event.filter(e => isBefore(e.start, new Date()));
          const futureShows = act.event.filter(e => isAfter(e.start, new Date()));

          return (
            <SingleActStyles>
              <Head>
                <title>{act.name}</title>
              </Head>
              <img src={act.image} alt={act.name} />
              <div className="details">
                <h2>{act.name}</h2>
                <p>{act.description}</p>
                <p>{act.email}</p>
                <p>{act.notes}</p>
              </div>
              <div className="shows">
                <h3>Upcoming Shows</h3>
                <ul>
                  {futureShows.length > 0 && futureShows.map(e => 
                  <Link key={e.id} href={{pathname: '/event', query: {id: e.id}}}>
                    <li><a>{format(e.start, "MM-d-YYYY - h:mma", {awareOfUnicodeTokens: true})}</a></li>
                  </Link>
                  )}
                </ul>
                <h3>Past Shows</h3>
                <ul>
                  {pastShows.length > 0 && pastShows.map(e => 
                  <Link key={e.id} href={{pathname: '/event', query: {id: e.id}}}>
                    <li><a>{format(e.start, "MM-d-YYYY - h:mma", {awareOfUnicodeTokens: true})}</a></li>
                  </Link>
                  )}
                </ul>
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
