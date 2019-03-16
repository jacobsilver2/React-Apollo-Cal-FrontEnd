import React from 'react';
import moment from 'moment';
import Button from '../styles/DeleteButtonStyles';
import { possibleStatus } from '../../lib/possibleStatus';
import daysUntil from '../../lib/daysUntilShow';

const UpdateEvent = ({loading, event, handleChange, notes, noteFieldCheck, addNoteField, formattedDate, formattedTime}) => (
  <fieldset disabled={loading} aria-busy={loading}>
  <h3>Edit Event</h3>
  <h4>{daysUntil(formattedDate)}</h4>
    <label htmlFor="date">
      Date
          <input type="date" id="date" name="date" placeholder="Date" required defaultValue={formattedDate} onChange={handleChange} />
    </label>

    <label htmlFor="time">
      Time
          <input type="time" id="time" name="time" placeholder="Date" required defaultValue={formattedTime} onChange={handleChange} />
    </label>

    <label htmlFor="duration">
      Duration (minutes)
          <input type="number" id="duration" name="duration" defaultValue={moment(event.end).diff(moment(event.start), 'minutes')} onChange={handleChange} />
          
    </label>

    <label htmlFor="status">
      Status
          <select name="status" defaultValue={event.status} onChange={handleChange}>
        {possibleStatus.map(status => <option key={status} value={status}>{status}</option>)}
      </select>
    </label>

    <label htmlFor="allDay">
      All Day
          <input type="checkbox" id="allday" name="allDay" defaultChecked={event.allDay} onChange={handleChange} />
    </label>

    <label htmlFor="draw">
      Draw
          <input type="number" id="draw" name="draw" placeholder={event.draw || 0} onChange={handleChange} />
    </label>
    
    <label htmlFor="notes">
      Notes
          {notes}
      <Button onClick={(e) => addNoteField(e, noteFieldCheck ? null : event.notes)}>&#43;</Button>
    </label>
  </fieldset>
);

export default UpdateEvent;