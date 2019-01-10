import React, { Component } from 'react';
import Calendar from 'react-big-calendar'
import moment from 'moment';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import {StyledBigCal} from './styles/BigCalendarStyles';
import {StyledBigCalDnd} from './styles/BigCalendarDndStyles';


const localizer = Calendar.momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar);

class BigCalendar extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
  };

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


  render() {
    return (
      <StyledBigCal>
      <DnDCalendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={this.state.events}
        onEventDrop={this.onEventDrop}
        onEventResize={this.onEventResize}
        resizable
        style={{ height: "100vh" }}
      />
      </StyledBigCal>

    );
  }
}

export default BigCalendar;
