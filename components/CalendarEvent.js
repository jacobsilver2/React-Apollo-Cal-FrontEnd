import React, { Component } from 'react';
import { format, getMinutes } from 'date-fns';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';

const StyledEvent = styled.div`
    background: white;
    border: 1px solid ${props => props.theme.offWhite};
    font-size: .4em;
    position: relative;
`;

class CalendarEvent extends Component {
  static propTypes = {
    event: PropTypes.object.isRequired
  }

  render() {
    const {event} = this.props;
    const minutes = getMinutes(event.time);
    const formattedTime = minutes > 0 ? format(event.time, "h:mma") : format(event.time, "ha");
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
}

export default CalendarEvent;