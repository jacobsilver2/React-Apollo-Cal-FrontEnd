import React, { Component } from 'react';
import styled from 'styled-components';
import dateFns from 'date-fns';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth';
import getMilliseconds from 'date-fns/getMilliseconds'
import isSameDay from 'date-fns/isSameDay';
import isSameMonth from 'date-fns/isSameMonth';


class Calendar extends Component {
  state = { 
    currentMonth: new Date(),
    selectedDate: new Date(),
  };

  renderHeader =() => {
    const dateFormat = 'MMMM YYYY';
    return (
        <div className='header row flex-middle'>
           <div className='col col-start'>
               <div className='icon' onClick={this.prevMonth}>
                   chevron_left
               </div>
           </div>
           <div className='col col-center'>
               <span>
                   {format(this.state.currentMonth, dateFormat, { awareOfUnicodeTokens: true })}
               </span>
           </div>
           <div className='col col-end' onClick={this.nextMonth}>
               <div className="icon">chevron_right</div>
           </div>
        </div>
    )
  }

renderDays = () => {
  const dateFormat = 'dddd';
  const days = [];
  let startDate = startOfWeek(this.state.currentMonth);

  for (let i=0; i<7; i++) {
      days.push(
          <div className='col col-center' key={i}>
             {format(addDays(startDate, i), dateFormat, { awareOfUnicodeTokens: true })}
          </div>
      );
  }
  return <div className="days row">{days}</div>
}

renderCells = () => {
  const { currentMonth, selectedDate } = this.state;
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = "D";
  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = "";

 
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat, { awareOfUnicodeTokens: true });
      const cloneDay = day;

      // debugger;
      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate) ? "selected" : ""
          }`}
          key={day.toString()}
        >
          <span className="number">{formattedDate}</span>
          <span className="bg">{formattedDate}</span>
        </div>
      );
      day = addDays(day, 1);
  }
  
  rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className="body">{rows}</div>;
}

nextMonth = () => {
  this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
  })
}

prevMonth = () => {
  this.setState({currentMonth: subMonths(this.state.currentMonth, 1)})
}


  render() {
    return (
      <div className='calendar'>
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;