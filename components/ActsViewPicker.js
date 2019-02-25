import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import Style from './styles/ActsViewPickerStyles';
import Grid from 'react-svg-loader!../assets/menu.svg';
import List from 'react-svg-loader!../assets/list.svg';

const ActsViewPicker = ({changeView, activeView}) => (
  <Style>
    <div className="btn-grp">
      <div>
        <button className={activeView === 'list' ? 'active' : null} onClick={() => changeView('list')}><List width={50} height={20}/></button>
        <button className={activeView === 'grid' ? 'active' : null} onClick={() => changeView('grid')}><Grid width={50} height={20}/></button>
      </div>
    </div>

  </Style>
);

export default ActsViewPicker;

