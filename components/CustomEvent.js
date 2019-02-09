import React, { Component } from 'react';
import {format, parseISO} from 'date-fns';
import moment from 'moment';
import styled from 'styled-components';

const Event = styled.div`

`;

class CustomEvent extends Component {

  handleContextMenu = e => {
    console.log('right clicked')
  }

  handleMouseOver = e => {
    setTimeout(
      () => console.log('moused over')
      ,1500)
  }

  handleClick = e => {
    console.log('clicked');
  }
  
  render() {
    const {event} = this.props
    // const start = format(parseISO(event.start), "h:mmaaaaa");
    const start = moment(event.start).format("h:mma");
    return (
      <div onClick={this.handleClick}>
         <p>{start} {event.act.name}</p>
      </div>
    );
  }
}

export default CustomEvent;