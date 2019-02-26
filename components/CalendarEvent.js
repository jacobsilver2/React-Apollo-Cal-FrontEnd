import React from 'react';
import { format, getMinutes } from 'date-fns';
import moment from 'moment';
import styled from 'styled-components';
import Link from 'next/link';

const StyledEvent = styled.div`
    background: white;
    border: 1px solid ${props => props.theme.offWhite};
    font-size: .4em;
    position: relative;
`;

const CalendarEvent = ({event}) => {
  const minutes = moment(event.start).minutes();
  const formattedTime = minutes > 0 ? moment(event.start).format("h:ma") : moment(event.start).format("ha");
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