import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import { Query, Mutation } from 'react-apollo';
import Router from 'next/router';
import { adopt } from 'react-adopt';
import { Spring } from 'react-spring/renderprops.cjs';
import moment from 'moment';
import CustomEvent from './CustomEvent';
import ModalContainer from './ModalContainer';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import {StyledBigCal} from './styles/BigCalendarStyles';
import * as queries from './globals/queries/queries';
import * as mutations from './globals/mutations/mutations';


const localizer = Calendar.momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar);


const Composed = adopt({
  moveEvent: ({ updates, updateCache, render }) => <Mutation mutation={mutations.MOVE_EVENT_MUTATION} variables={updates} update={updateCache} optimisticResponse={{ __typename: 'Mutation', moveEvent: {start: updates.start, end: updates.end, id: updates.id, __typename: 'Event'} }}>{render}</Mutation>,
  allEvents: ({ render }) => <Query query={queries.ALL_EVENTS_QUERY}>{render}</Query>,
  toggleModal: ({ render }) => <Mutation mutation={mutations.TOGGLE_MODAL_MUTATION}>{render}</Mutation>,
  localState: ({ render }) => <Query query={queries.LOCAL_STATE_QUERY}>{render}</Query>,
  spring: ({render}) => <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>{render}</Spring>,
});

class BigCalendar extends Component {
  state = {
    eventSelected: false
  };

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onSelectSlot = e => {
    switch (e.action) {
      case 'click':
        break;
      case 'doubleClick':
        Router.push({pathname: '/newCalEvent', query: {start: encodeURIComponent(e.start.toString()), end: encodeURIComponent(e.end.toString()) }});
        break;
      case 'select':
        break;
    }
  }

  onToolTipAccess = e => {
    const name = e.act.name ? `${e.act.name}` : null 
    const time = moment(e.start).format("h:mma") ;
    return `${time} ${name}`;
  }

  titleAccessor = e => {
    const time = moment(e.start).format("hh:mma");
    const name = e.act.name ? ` ${e.act.name}`: null;
    return time + name;
  }

  eventStyleGetter = e => {
    let backGroundColor = ''
    switch (e.status){
      case 'HELD':
        backGroundColor = 'grey';
        break;
      case 'CANCELLED':
        backGroundColor = 'red';
        break;
    }
    let style = {
      backgroundColor: backGroundColor
    }
    return {style}
  }

  onMoveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }, moveEventMutation) => {
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
    const data = cache.readQuery({ query: queries.ALL_EVENTS_QUERY });
    // 2. Filter the deleted itemout of the page
    const eventIndex = data.events.findIndex(event => event.id === payload.data.moveEvent.id)
    data.events[eventIndex].start = payload.data.moveEvent.start;
    data.events[eventIndex].end = payload.data.moveEvent.end;
    // 3. Put the items back!
    cache.writeQuery({ query: queries.ALL_EVENTS_QUERY, data });
  };

  onToggleModal = (e, toggleModal) => {
    this.setState({event: e})
    toggleModal();
  }

  render() {
    return (
      <Composed updates={this.state} updateCache={this.updateCache}>
        {({ moveEvent, allEvents, toggleModal, localState, spring }) => {
          if (allEvents.loading) return <p>Loading...</p>
          if (allEvents.error) return <p>Error: {allEvents.error.message}</p>
          return (
            <>
            {localState.data.modalOpen && <ModalContainer event={this.state.event}/>}
            <div style={spring}>
            <StyledBigCal>
                <DnDCalendar
                  events={allEvents.data.events}
                  eventPropGetter={e => this.eventStyleGetter(e)}
                  onSelectEvent={e => this.onToggleModal(e, toggleModal)}
                  onDoubleClickEvent={e => Router.push({ pathname: '/updateEvent', query: { id: e.id, start: encodeURIComponent(e.start)}})}
                  onEventDrop={e => this.onMoveEvent(e,moveEvent)}
                  selectable
                  localizer={localizer}
                  startAccessor={e => moment(e.start).toDate()}
                  endAccessor={e => moment(e.end).toDate()}
                  onEventResize={this.onEventResize}
                  popup={true}
                  popupOffset={{x: 30, y: 20}}
                  titleAccessor={this.titleAccessor}
                  onSelectSlot={e => this.onSelectSlot(e)}
                  tooltipAccessor={e => this.onToolTipAccess(e)}
                  defaultView="month"
                  defaultDate={new Date()}
                  views={['month']}
                  style={{ height: "100vh" }}
                  components={{ event: CustomEvent }}
                />
            </StyledBigCal>
            </div>
            </>
          )
        }
        }
      </Composed>
    );
  }
}
export default BigCalendar;



