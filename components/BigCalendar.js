import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import { Query, Mutation } from 'react-apollo';
import Router from 'next/router';
import Link from 'next/link'
import gql from 'graphql-tag';
import moment from 'moment';
import {format} from 'date-fns';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import {StyledBigCal} from './styles/BigCalendarStyles';
import {StyledBigCalDnd} from './styles/BigCalendarDndStyles';


const localizer = Calendar.momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar);

const ALL_EVENTS_QUERY = gql`
  query ALL_EVENTS_QUERY {
    events {
      id
      title
      status
      start
      end
      allDay
      notes
      draw
      act {
        id
        name
        description
        notes
      }
    }
  }
`;

const MOVE_EVENT_MUTATION = gql`
  mutation MOVE_EVENT_MUTATION($id: ID!, $start: DateTime, $end: DateTime, $allDay: Boolean) {
    moveEvent(id: $id, start: $start, end: $end, allDay: $allDay) {
      id
      start
      end
    }
  }
`;



class BigCalendar extends Component {
  state = {};

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };


  onSelectEvent = e => {
    Router.push({
      pathname: '/event',
      query: { id: e.id }
    })
  }

  onSelectSlot = e => {
    switch (e.action) {
      case 'click':
        console.log('slot was clicked');
        break;
      case 'doubleClick':
        Router.push({pathname: '/newCalEvent', query: {start: encodeURIComponent(e.start), end: encodeURIComponent(e.end) }});
        break;
      case 'select':
        console.log('slot was selected');
        break;
    }
  }

  onToolTipAccess = e => {
    const name = e.act.name ? `${e.act.name}` : null 
    const time = format(e.start, "h:mmaaaaa")
    return `${time} ${name}`;
  }

  titleAccessor = e => {
    const time = format(e.start, "h:mmaaaaa");
    const name = e.act.name ? ` ${e.act.name}`: null;
    return time + name;
  }

  moveEvent = (moveEventMutation, { event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    this.setState({
      start,
      end,
      id: event.id,
    })
    moveEventMutation().catch(err => {
      alert(err.message)
    })
  }

  updateCache = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the items we want
    const data = cache.readQuery({ query: ALL_EVENTS_QUERY });
    // 2. Filter the deleted itemout of the page
    const eventIndex = data.events.findIndex(event => event.id === payload.data.moveEvent.id)
    data.events[eventIndex].start = payload.data.moveEvent.start;
    data.events[eventIndex].end = payload.data.moveEvent.end;
    // 3. Put the items back!
    cache.writeQuery({ query: ALL_EVENTS_QUERY, data });
  };

  render() {
    return (
      <Query query={ALL_EVENTS_QUERY}>
        {({data, error, loading}) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>

          return (
          <Mutation mutation={MOVE_EVENT_MUTATION} variables={this.state} update={this.updateCache}>
            {(moveEvent, { error }) => (
              <StyledBigCal>
                <DnDCalendar
                  events={data.events}
                  selectable
                  localizer={localizer}
                  startAccessor={e => moment(e.start).toDate()}
                  endAccessor={e => moment(e.end).toDate()}
                  onEventDrop={(e) => this.moveEvent(moveEvent, e)}
                  onEventResize={this.onEventResize}
                  popup={true}
                  popupOffset={{x: 30, y: 20}}
                  titleAccessor={this.titleAccessor}
                  // onSelectEvent={(e) => this.onSelectEvent(e)}
                  onDoubleClickEvent={e => Router.push({ pathname: '/updateEvent', query: { id: e.id, start: encodeURIComponent(e.start)}})}
                  onSelectSlot={e => this.onSelectSlot(e)}
                  tooltipAccessor={e => this.onToolTipAccess(e)}
                  defaultView="month"
                  defaultDate={new Date()}
                  views={['month']}
                  style={{ height: "100vh" }}
                />
              </StyledBigCal>
            )}
          </Mutation>
          )
        }}
      </Query>
    );
  }
}

export { ALL_EVENTS_QUERY };
export default BigCalendar;
