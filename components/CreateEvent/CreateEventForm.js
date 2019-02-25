import React from 'react';
import moment from 'moment';

const CreateEventForm = ({loading, dateFormat, timeFormat, values, notes, handleChange, addNoteField, possibleStatus }) => (
  <fieldset disabled={loading} aria-busy={loading}>
  <label htmlFor="date">
    Date
    <input type="date" id="date" name="date" placeholder="Date" value={moment(values.start).format(dateFormat)} onChange={handleChange}/>
  </label>

  <label htmlFor="time">
    Time
    <input type="time" id="time" name="time" placeholder={moment(values.start).add(20, 'hours').format(timeFormat)} value={moment(values.start).format(timeFormat)} onChange={handleChange}/>

  </label>

  <label htmlFor="duration">
    Duration (minutes)
    <input type="number" id="duration" name="duration" placeholder="45" value={values.duration} onChange={handleChange} />
  </label>

  <label htmlFor="status">
    Status
    <select name="status" defaultValue={values.status} onChange={handleChange}>
      { possibleStatus.map(status => <option key={status} value={status}>{status}</option>) }
    </select>
  </label>

  <label>
    All Day
    <input type="checkbox" id="allday" name="allday" checked={values.allDay} onChange={handleChange} />
  </label>

  <label htmlFor="notes">
    Notes
    {notes}
    <button onClick={addNoteField}>&#43;</button>
  </label>
</fieldset>
);

export default CreateEventForm;