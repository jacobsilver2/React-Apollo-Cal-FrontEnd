import React, { Component } from 'react';
import Link from 'next/link';
import { Query} from 'react-apollo';
import moment from 'moment';
import styled from 'styled-components';
import Head from 'next/head';
import * as queries from './globals/queries/queries';
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
    object-fit: scale-down;
  }
  .details {
    margin: 3rem;
    font-size: 1.5rem;
    align-self: center;
  }
  .buttonlist {
    align-self: center;
  }
`;

class SingleEvent extends Component {
  render() {
    const dateFormat = "MMMM D, YYYY"
    const timeFormat = "h:mm a"
    return (
        <Query query={queries.SINGLE_EVENT_QUERY} variables={{id: this.props.id}}>
          {({error, loading, data}) => {
            if (error) return <Error error={error} />
            if (loading) return <p>Loading</p>
            if (!data.event) return <p>No Item Found for ID {this.props.id}</p>
            const event = data.event
            return (
              
              <SingleEventStyles>
                <Head>
                  {event.title}
                </Head>
                <img src={event.act.largeImage} alt={event.act.name}/>
                <div className="details">
                  <h2>{event.act.name}</h2>
                  <p>{moment(event.start).format(dateFormat)}</p>
                  <p>{!event.allDay ? moment(event.start).format(timeFormat) : "This Event is All-Day"}
                  </p>
                  <p>{event.act.description}</p>
                </div>
                <div className="buttonlist">
                  <p>
                    <Link href={{ pathname: "updateEvent", query: {id: this.props.id, start: encodeURIComponent(event.start)}}}>
                      <a>Edit ✏️</a>
                    </Link>
                  </p>
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