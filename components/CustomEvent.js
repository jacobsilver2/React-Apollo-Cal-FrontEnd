import React, { Component } from 'react';
import {format} from 'date-fns';
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
    const start = format(event.start, "h:mmaaaaa");
    return (
      <div onClick={this.handleClick}>
         <p>{start} {event.act.name}</p>
      </div>
    );
  }
}

export default CustomEvent;