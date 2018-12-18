import React, { Component } from 'react';
import Link from 'next/link';
import { Query} from 'react-apollo';
import { format } from 'date-fns';
import styled from 'styled-components';
import Head from 'next/head';
import {SINGLE_EVENT_QUERY} from './UpdateEvent';
import Title from './styles/Title';
import DeleteEvent from './DeleteEvent';
import Error from './ErrorMessage';

const SingleEventStyles = styled.div`
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
    font-size: 0.5rem;
  }
`;

class SingleEvent extends Component {
  render() {
    const dateFormat = "MMMM d, YYYY"
    return (
        <Query query={SINGLE_EVENT_QUERY} variables={{id: this.props.id}}>
          {({error, loading, data}) => {
            if (error) return <Error error={error} />
            if (loading) return <p>Loading</p>
            if (!data.event) return <p>No Item Found for ID {this.props.id}</p>
            const event = data.event
            console.log(event)
            return (
              
              <SingleEventStyles>
                <Head>
                  <title>{event.title}</title>
                </Head>
                <img src={event.act.largeImage} alt={event.act.name}/>
                <div className="details">
                  <h2>{event.act.name}</h2>
                  <p>{format(event.date, dateFormat, { awareOfUnicodeTokens: true })}</p>
                  <p>{event.act.description}</p>
                </div>
                <div className="buttonlist">
                  <Link href={{ pathname: "updateEvent", query: {id: this.props.id}}}>
                    <a>Edit ✏️</a>
                  </Link>
                  <DeleteEvent id={event.id}>Delete Event</DeleteEvent>
                </div>
              </SingleEventStyles>
            )
          }}
        </Query>
    );
  }
}

export default SingleEvent;