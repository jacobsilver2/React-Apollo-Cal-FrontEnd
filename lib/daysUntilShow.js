import moment from 'moment';

  export default function daysUntil(date) {
    // check and see if the date is in the past
    if (moment(date).isBefore(new Date())) {
      return;
    }
    //turn it into a moment
    const dateMoment = moment(date);
    //get the duration
    const duration = moment.duration(dateMoment.diff(new Date()));
    // get the duration as days
    const until = Math.ceil(duration.asDays());
    // singular if the show is in 1 day, plural if more than 1 day
    const ifText = until > 1 ? "DAYS" : "DAY";
    return `${until} ${ifText} UNTIL SHOW`;
  }