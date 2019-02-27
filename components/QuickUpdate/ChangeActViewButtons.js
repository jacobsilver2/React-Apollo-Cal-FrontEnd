import React from 'react';
import styled from 'styled-components';
import Button from '../styles/SickButton';

const StyledField = styled.div`
  padding-top: 75%;
  text-align: center;
  li {
    margin: 1em 0;
  }
`;

const NewButton = styled(Button)`
  opacity: ${props => props.selected ? 1.0 : 0.5};
  width: 75%;
  text-transform: none;
  transition: all 0.5s;
  &[disabled] {
    opacity: 0.5;
  }

`;

const ChangeActViewButtons = ({handleClick, active}) => {
  return (
    <fieldset>
    <StyledField>
      <ul>
        <li><NewButton selected={active === 'editExisting'} onClick={(e)=>handleClick('editExisting', e)}>Edit Act</NewButton></li>
        <li><NewButton selected={active === 'change'} onClick={(e)=>handleClick('change', e)}>Switch Acts</NewButton></li>
        <li><NewButton selected={active === 'new'} onClick={(e)=>handleClick('new', e)}>New Act</NewButton></li>
      </ul>
    </StyledField>
  </fieldset>
  );
}

export default ChangeActViewButtons;