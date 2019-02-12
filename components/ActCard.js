import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ActStyles from './styles/ItemStyles';
import { Spring } from 'react-spring/renderprops';

class ActCard extends Component {

  static propTypes = {
    act: PropTypes.object.isRequired,
    view: PropTypes.string,
  };

  render() {
    const { act, view } = this.props;
    
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => 
          <div style={props}>
            <ActStyles>
              {view === 'grid' && act.image && <img src={act.image} alt={act.name}/>}
              <Title>
                <Link href={{ pathname: '/act', query: { id: act.id } }} >
                  <a>{act.name}</a>
                </Link>
              </Title>
              {view === 'grid' && <p>{act.description}</p>}
              <div className="buttonList">
                <Link href={{ pathname: 'updateAct', query: { id: act.id }, }} >
                  <a>Edit ✏️</a>
                </Link>
                {/* <DeleteAct id={act.id}>Delete This Item</DeleteAct> */}
              </div>
            </ActStyles>
          </div>
      }</Spring>
    );
  }
}

export default ActCard;