import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ActStyles from './styles/ItemStyles';

class Act extends Component {

  static propTypes = {
    act: PropTypes.object.isRequired,
  };

  render() {
    const { act } = this.props;
    return (
      <ActStyles>
        {act.image && <img src={act.image} alt={act.name}/>}

        <Title>
          <Link
            href={{
              pathname: '/act',
              query: { id: act.id }
            }}
          >
            <a>{act.name}</a>
          </Link>
        </Title>
        <p>{act.description}</p>
        <div className="buttonList">
          <Link
            href={{
              pathname: 'updateAct',
              query: { id: act.id },
            }}
          >
            <a>Edit ✏️</a>
          </Link>
          {/* <DeleteAct id={act.id}>Delete This Item</DeleteAct> */}
        </div>
      </ActStyles>
    );
  }
}

export default Act;