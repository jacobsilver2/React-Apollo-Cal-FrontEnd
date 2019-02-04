import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import Style from './styles/ActsViewPickerStyles';
import Grid from 'react-svg-loader!../assets/menu.svg';
import List from 'react-svg-loader!../assets/list.svg';

const ActsViewPicker = ({changeView}) => (
  <Style>
    <strong>Display</strong>
    <div className="btn-grp">
      <div>
        <button onClick={() => changeView('list')}><List width={50} height={20}/></button>
        <button onClick={() => changeView('grid')}><Grid width={50} height={20}/></button>
      </div>
    </div>

  </Style>
);

export default ActsViewPicker;

