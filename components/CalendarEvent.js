import React, { Component } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';

const StyledEvent = styled.div`
    font-size: .5em;
    color: red;
`;

class CalendarEvent extends Component {
  render() {
    
    const {event} = this.props;
    const formattedDay = format(event.date, ("MMMM d"))
    return (
      <StyledEvent>
        • {event.title}
      </StyledEvent>     
    );
  }
}

export default CalendarEvent;