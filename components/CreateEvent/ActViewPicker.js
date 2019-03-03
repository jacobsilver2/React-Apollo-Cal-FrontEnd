import React from 'react'
import Style from '../styles/ActsViewPickerStyles';
import Center from '../styles/Center';
import styled from 'styled-components';
import {NewButton} from '../QuickUpdate/ChangeActViewButtons';

const ActViewButton = styled(NewButton)`
  font-size: .8em;
`;


const ActViewPicker = ({change, active}) => (
  <Center>
    <Style>
          <ActViewButton selected={active === 'new'} onClick={(e)=> change(e, 'new')}>Create New Act</ActViewButton>
          <ActViewButton selected={active === 'existing'} onClick={(e)=> change(e, 'existing')}>Select Existing Act</ActViewButton>
    </Style>
  </Center>
);

export default ActViewPicker;