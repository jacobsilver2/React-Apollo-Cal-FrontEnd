import React from 'react';

const ChangeActWithinUpdateEvent = ({acts, handleChange}) => {
  return (
    <fieldset>
    <h3>Change To A Different Act</h3>
    <h6>...currently not working</h6>
    <select defaultValue="" onChange={handleChange}>
      <option value="" disabled>Acts</option>
      { acts }
    </select>
  </fieldset>
  );
}

export default ChangeActWithinUpdateEvent;