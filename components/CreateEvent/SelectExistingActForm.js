import React from 'react'
import styled from 'styled-components';

const Field = styled.fieldset`
  height: 85%;
`;

const SelectExistingActForm = ({
  handleChange, acts
}) => (
  <Field>
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
  </Field>
);

export default SelectExistingActForm;