import React, { Component } from 'react';
import gql from 'graphql-tag';
import Link from 'next/link'
import moment from 'moment';
import { Query } from 'react-apollo';
import { Spring } from 'react-spring';
import { adopt } from 'react-adopt';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import {ReactVisStyled} from './styles/React-Vis';
import {SINGLE_ACT_QUERY} from './globals/queries/queries';
import SingleActStyles from './styles/SingleActStyles';
import {XYPlot, LineSeries, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, Hint, Crosshair} from 'react-vis';

const Composed = adopt({
  singleActQuery: ({id, render}) => <Query query={SINGLE_ACT_QUERY} variables={{id}}>{render}</Query>,
  spring: ({render}) => <Spring from={{ opacity: 0}} to={{opacity: 1}}>{render}</Spring>
})


class SingleAct extends Component {
  render() {
    return (
      <Composed query={SINGLE_ACT_QUERY} id={this.props.id}>
        {({ singleActQuery, spring }) => {
          if (singleActQuery.error) return <Error error={singleActQuery.error} />;
          if (singleActQuery.loading) return <p>Loading...</p>;
          if (!singleActQuery.data.act) return <p>No Act Found for {this.props.id}</p>;
          const act = singleActQuery.data.act;
          const notes = act.notes.map((note,i) => <ul key={i}>{note}</ul>);
          // const pastShows = act.event.filter(e => isBefore(parse(e.start), new Date()));
          const pastShows = act.event.filter(e => moment(e.start).isBefore(new Date()));
          // const futureShows = act.event.filter(e => isAfter(parse(e.start), new Date()))
          const futureShows = act.event.filter(e => moment(e.start).isAfter(new Date()));
          // const drawObject = act.event.map(e => new Object({x: format(e.start, "M/d/yy"), y: e.draw}));
          const drawObject = act.event.map(e => new Object({x: moment(e.start).format("M/D/YY"), y: e.draw}))

          const drawGraph = act.event.length > 0 ? 
            <div className="react-vis">
              <h3>Draw Graph</h3>
              <ReactVisStyled>
                <XYPlot height={300} width={500} animation domain={[0, 50]} color="#1a8fff" xType="ordinal">
                  <VerticalBarSeries data={drawObject} />
                  <XAxis title="date"/>
                  <YAxis title="draw"/>
                  <HorizontalGridLines />
                </XYPlot>
              </ReactVisStyled>
            </div> : null

          return (
            <div style={spring}>
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
                  { notes.length > 0 ? <div><h3>Notes</h3><ul>{notes}</ul></div> : null}
                </div>
                <div className="shows">
                  {futureShows.length > 0 && <h3>Upcoming Shows</h3>}
                  <ul>
                    {futureShows.length > 0 && futureShows.map(e => 
                    <Link key={e.id} href={{pathname: '/event', query: {id: e.id}}}>
                      <li><a>{moment(e.start).format("dddd, MMMM Do, YYYY - h:mma")}</a></li>
                    </Link>
                    )}
                  </ul>
                  {pastShows.length > 0 && <h3>Past Shows</h3>}
                  <ul>
                    {pastShows.length > 0 && pastShows.map(e => 
                    <Link key={e.id} href={{pathname: '/event', query: {id: e.id}}}>
                    <li><a>{moment(e.start).format("dddd, MMMM Do, YYYY - h:mma")}</a></li>
                    </Link>
                    )}
                  </ul>
                </div>
                {drawGraph}
              </SingleActStyles>
              </div>
          );
        }}
      </Composed>
    );
  }
}

export default SingleAct;
