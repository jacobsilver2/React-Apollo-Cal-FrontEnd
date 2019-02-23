import React, { Component } from 'react';
import { format, getMinutes } from 'date-fns';
import styled from 'styled-components';
import Link from 'next/link';

const StyledEvent = styled.div`
    background: white;
    border: 1px solid ${props => props.theme.offWhite};
    font-size: .4em;
    position: relative;
`;

const CalendarEvent = ({event}) => {
  const minutes = getMinutes(event.start);
  const formattedTime = minutes > 0 ? format(event.start, "h:mma") : format(event.start, "ha");

  return (
      <StyledEvent>
        <Link href={{
          pathname: '/event',
          query: { id: event.id },
        }}>
          <a>•{formattedTime} {event.act.name}</a>
        </Link>
      </StyledEvent>     
  );
}

export default CalendarEvent;