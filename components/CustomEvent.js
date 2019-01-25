import React, { Component } from 'react';
import {format} from 'date-fns';
import styled from 'styled-components';

const Event = styled.div`

`;

class CustomEvent extends Component {

  
  render() {
    const {event} = this.props
    const start = format(event.start, "h:mmaaaaa");
    return (
      <Event>
         <p>{start} {event.act.name}</p>
      </Event>
    );
  }
}

export default CustomEvent;