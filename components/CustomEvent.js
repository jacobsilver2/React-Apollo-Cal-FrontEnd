import React from 'react';
import moment from 'moment';

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

  const start = moment(event.start).format("h:mma");
  return (
    <div onClick={handleClick}>
         <p>{start} {event.act.name}</p>
      </div>    
  );
}

export default CustomEvent;

// class CustomEvent extends Component {

//   handleContextMenu = e => {
//     console.log('right clicked')
//   }

//   handleMouseOver = e => {
//     setTimeout(
//       () => console.log('moused over')
//       ,1500)
//   }

//   handleClick = e => {
//     console.log('clicked');
//   }
  
//   render() {
//     const {event} = this.props
//     // const start = format(parseISO(event.start), "h:mmaaaaa");
//     const start = moment(event.start).format("h:mma");
//     return (
//       <div onClick={this.handleClick}>
//          <p>{start} {event.act.name}</p>
//       </div>
//     );
//   }
// }

// export default CustomEvent;