import React, { Component } from 'react';
import Link from 'next/link';
import { Query} from 'react-apollo';
import { format } from 'date-fns';
import {SINGLE_EVENT_QUERY} from './UpdateEvent';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import DeleteEvent from './DeleteEvent';



class SingleEvent extends Component {
  render() {
    const dateFormat = "MMMM d, YYYY"
    return (
        <Query query={SINGLE_EVENT_QUERY} variables={{id: this.props.id}}>
          {({data, loading}) => {
            if (loading) return <p>Loading</p>
            if (!data.event) return <p>No Item Found for ID {this.props.id}</p>
            return (
              <ItemStyles>
                { data.event.image && <img src={data.event.image} alt={data.event.title}/> }
                <Title>{data.event.title}</Title>
                <p>{format(data.event.date, dateFormat, { awareOfUnicodeTokens: true })}</p>
                <p>{data.event.description}</p>
                <img src={data.event.largeImage} alt={data.event.title}/>
                <div className="buttonlist">
                  <Link href={{ pathname: "updateEvent", query: {id: this.props.id}}}>
                    <a>Edit ✏️</a>
                  </Link>
                  <DeleteEvent id={data.event.id}>Delete Event</DeleteEvent>
                </div>
              </ItemStyles>
            )
          }}
        </Query>
    );
  }
}

export default SingleEvent;