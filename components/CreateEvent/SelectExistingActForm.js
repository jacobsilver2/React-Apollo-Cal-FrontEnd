import React from 'react'

const SelectExistingActForm = ({
  handleChange, acts
}) => (
  <fieldset>
    <label htmlFor="acts">
      Existing Act
      <select name="select-existing-act" defaultValue="" onChange={handleChange}>
        <option value="" disabled>Acts</option>
        {
          acts.map(act => <option key={act.id} value={act.id}>{act.name}</option>)
        }
      </select>
    </label>
    <hr />
  </fieldset>
);

export default SelectExistingActForm;