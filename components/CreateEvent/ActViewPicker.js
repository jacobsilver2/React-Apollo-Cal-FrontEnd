import React from 'react'
import Style from '../styles/ActsViewPickerStyles';
import Center from '../styles/Center';
const ActViewPicker = ({change, active}) => (
  <Center>
    <Style>
      <button className={active === 'new' ? 'active' : null} onClick={(e)=> change(e, 'new')}>Create New Act</button>
      <button className={active === 'existing' ? 'active' : null} onClick={(e)=> change(e, 'existing')}>Select Existing Act</button>
    </Style>
  </Center>
);

export default ActViewPicker;