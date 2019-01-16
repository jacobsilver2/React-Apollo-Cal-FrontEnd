import React, { Component } from 'react';
import gql from 'graphql-tag';
import Link from 'next/link'
import { format, isBefore, isAfter } from 'date-fns';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import {ReactVisStyled} from './styles/React-Vis';
import {XYPlot, LineSeries, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, Hint, Crosshair} from 'react-vis';

const SingleActStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  text-align: center;
  a {
    cursor: pointer;
  }
  h3 {
    text-decoration: underline;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
  p {
    font-weight: 2;
  }
  .details {
    margin: 1rem;
    font-size: 1.5rem;
    align-self: center;
  }
  .shows {
    margin: 1rem;
    font-size: 1rem;
    align-self: center;
  }
  .react-vis {
    margin: 1rem;
    font-size: 1rem;
    align-self: center;
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
        allDay
        draw
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
          const drawObject = act.event.map(e => new Object({x: format(e.start, "M/d/yy"), y: e.draw}));
          console.log(drawObject)
          return (
            <SingleActStyles>
              <Head>
                <title>{act.name}</title>
              </Head>
              <img src={act.image} alt={act.name} />
              <div className="details">

                <h2>{act.name}</h2>
                <h3>Description</h3>
                <p>{act.description}</p>
                <h3>Contact</h3>
                <p><a href={`mailto:${act.email}`}>{act.email}</a></p>
                <h3>Notes</h3>
                <p>{act.notes}</p>
              </div>
              <div className="shows">
                {futureShows.length > 0 && <h3>Upcoming Shows</h3>}
                <ul>
                  {futureShows.length > 0 && futureShows.map(e => 
                  <Link key={e.id} href={{pathname: '/event', query: {id: e.id}}}>
                    <li><a>{format(e.start, "EEEE, MMMM do, uu - h:mma")}</a></li>
                  </Link>
                  )}
                </ul>
                {pastShows.length > 0 && <h3>Past Shows</h3>}
                <ul>
                  {pastShows.length > 0 && pastShows.map(e => 
                  <Link key={e.id} href={{pathname: '/event', query: {id: e.id}}}>
                    <li><a>{format(e.start, "EEEE, MMMM do, uu - h:mma")}</a></li>
                  </Link>
                  )}
                </ul>
              </div>
              <div className="react-vis">
                <h3>Draw Graph</h3>
                <ReactVisStyled>
                  <XYPlot height={300} width={500} domain={[0, 50]} color="#1a8fff" xType="ordinal">
                    <VerticalBarSeries data={drawObject} />
                    <XAxis title="date"/>
                    <YAxis title="draw"/>
                    <HorizontalGridLines />
                  </XYPlot>
                </ReactVisStyled>
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
