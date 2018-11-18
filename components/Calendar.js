import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {format, addDays, addMonths, subMonths, startOfWeek, endOfWeek, startOfMonth, endOfMonth, getMilliseconds, isSameDay, isSameMonth} from 'date-fns';
import {StyledCal} from './styles/CalendarStyles';

const ALL_EVENTS_QUERY = gql`
  query ALL_EVENTS_QUERY {
    events {
      id
      title
      description
      image
      largeImage
      date
    }
  }
`;

class Calendar extends Component {
  state = { 
    currentMonth: new Date(),
    selectedDate: new Date(),
  };

  renderHeader = () => {
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
             <div className="icon">
                chevron_right
             </div>
         </div>
      </div>
    )
  }

  renderDays = () => {
    const dateFormat = 'EEEE';
    const days = [];
    let startDate = startOfWeek(this.state.currentMonth);

    for (let i=0; i<7; i++) {
        days.push(
            <div className='col col-center' key={i}>
               {format(addDays(startDate, i), dateFormat, {awareOfUnicodeTokens: true})}
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
  
    const dateFormat = "d";
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
    return  <div className="body">{rows}</div>;
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

        <Query query={ALL_EVENTS_QUERY}>
          { ({data, error, loading}) => {
            console.log(data)
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error: {error.message}</p>
            return (
              <StyledCal>
                <p>I found {data.events.length} items</p>
                <div className="calendar">
                  {this.renderHeader()}
                  {this.renderDays()}
                  {this.renderCells()}
                </div>
              </StyledCal>
            )
          }}
        </Query>

    );
  }
}

export default Calendar;