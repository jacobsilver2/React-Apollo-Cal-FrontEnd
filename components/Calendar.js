import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Router from 'next/router';
import Link from 'next/link'
import gql from 'graphql-tag';
import {format, addDays, addMonths, subMonths, startOfWeek, endOfWeek, startOfMonth, endOfMonth, getMilliseconds, isSameDay, isSameMonth, parse} from 'date-fns';
import moment from 'moment';
import {StyledCal} from './styles/CalendarStyles';
import CalendarEvent from './CalendarEvent';

const ALL_EVENTS_QUERY = gql`
  query ALL_EVENTS_QUERY {
    events {
      id
      date
      notes
      act {
        id
        name
      }
    }
  }
`;

class Calendar extends Component {
  state = { 
    currentMonth: new Date(),
    selectedDate: new Date(),
  };

  createNewEvent = (day) => {
    Router.push({
      pathname: '/newCalEvent',
      query: day
    })
  }

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

  renderCells = (events) => {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
  
    const dateFormat = "d";
    const dateFormatQueryParam = "YYYY-MM-dd";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    // let dateCheckFormat = "YYYY MMMM d";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat, { awareOfUnicodeTokens: true });
        
        const matchedEvent = events.filter(event => {
          //! this is seriously stupid and only works on east coast time.
          // todo: FIX THIS
          let momentEvent = moment(event.date, 'YYYY-MM-DDTHH:mm:ss.SSSSZ').add(5, 'hours').format();
          let momentDay = moment(day, 'YYYY-MM-DDTHH:mm:ss.SSSSZ').set({h: 0, m: 0}).format();
          return moment(momentEvent).isSame(moment(momentDay))
        });
        days.push(
          <Link key={day.toString()} href={{ pathname: '/newCalEvent', query: { date: format(day, dateFormatQueryParam, { awareOfUnicodeTokens: true })} }}>
            <div
              className={`col cell ${ !isSameMonth(day, monthStart) ? "disabled" : isSameDay(day, selectedDate) ? "selected" : "" }`}
              key={day.toString()}
            >
              <span className="number">{formattedDate}</span>
              <span className="bg">{formattedDate}</span>
              {matchedEvent.length > 0 && matchedEvent.map(e => <CalendarEvent event={e} key={e.id}/>)}
            </div>
          </Link>
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
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error: {error.message}</p>
            return (
              <StyledCal>
                <div className="calendar">
                  {this.renderHeader()}
                  {this.renderDays()}
                  {this.renderCells(data.events)}
                </div>
              </StyledCal>
            )
          }}
        </Query>

    );
  }
}

export { ALL_EVENTS_QUERY };
export default Calendar;