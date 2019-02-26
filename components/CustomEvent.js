import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const StyledEvent = styled.div`
  font-size: .8em;
  min-height: 5px;
  max-height: 10px;
`;

const CustomEvent = ({event}) => {

  function handleContextMenu(e) {
    console.log('right clicked')
  }

  function handleMouseOver() {
    setTimeout(
      () => console.log('moused over')
      ,1500)
  }

  function handleClick() {
    console.log('clicked')
  }
  const minutes = moment(event.start).minutes();
  const formattedTime = minutes > 0 ? moment(event.start).format("h:ma") : moment(event.start).format("ha");
  return (
    <div onClick={handleClick}>
         <p>{formattedTime} {event.act.name}</p>
      </div>    
  );
}

export default CustomEvent;
