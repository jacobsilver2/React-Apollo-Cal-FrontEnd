import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import { Query } from 'react-apollo';
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
      start
      end
      allDay
      notes
      act {
        id
        name
      }
    }
  }
`;

class BigCalendar extends Component {

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start);
  };

  onSelectEvent = e => {
    Router.push({
      pathname: '/event',
      query: { id: e.id }
    })
  }


  render() {
    return (
      <Query query={ALL_EVENTS_QUERY}>
        {({data, error, loading}) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>
          return (
          <StyledBigCal>
            <DnDCalendar
              selectable
              localizer={localizer}
              events={data.events}
              onEventDrop={this.onEventDrop}
              resizable
              titleAccessor={e => (format(e.start, "h:mmaaaaa") + " " + e.act.name)}
              onSelectEvent={(e) => this.onSelectEvent(e)}
              onDoubleClickEvent={e => Router.push({ pathname: '/updateEvent', query: { id: e.id, start: encodeURIComponent(e.start)}})}
              onSelectSlot={e => Router.push({pathname: '/newCalEvent', query: {start: encodeURIComponent(e.start), end: encodeURIComponent(e.end) }})}
              tooltipAccessor={e => e.act.name}
              defaultView="month"
              defaultDate={new Date()}
              views={['month', 'week', 'day']}
              onEventResize={this.onEventResize}
              style={{ height: "100vh" }}
            />
          </StyledBigCal>
          )
        }}
      </Query>
    );
  }
}

export default BigCalendar;
