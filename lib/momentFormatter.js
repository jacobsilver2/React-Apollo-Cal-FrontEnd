import moment from 'moment';

const DAY_MONTH_DATE_YEAR = "dddd, MMMM Do YYYY";
const TIME_12_AM_PM = "hh:mm a"


function dayMonthDateYear(date){
  return moment(date).format(DAY_MONTH_DATE_YEAR)
}

function timeTwelveHourWithAmPm(date){
  return moment(date).format(TIME_12_AM_PM)
}

export {dayMonthDateYear, timeTwelveHourWithAmPm};