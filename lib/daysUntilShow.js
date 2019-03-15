import moment from 'moment';

  export default function daysUntil(date) {
    if (moment(date).isBefore(new Date())) {
      return;
    }
    const dateMoment = moment(date);
    const duration = moment.duration(dateMoment.diff(new Date()));
    const until = Math.floor(duration.asDays());
    const ifText = until > 1 ? "DAYS" : "DAY";
    const returnText = `${until} ${ifText} UNTIL SHOW`;
    return returnText;
  }