import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import {TOGGLE_MODAL_MUTATION} from '../lib/withData';
import QuickUpdateStyled from './styles/QuickUpdateStyles';
import Closebutton from './styles/CloseButton';
import { Portal } from './Portal'
import OverlayStyled from './styles/OverlayStyled';



class QuickUpdate extends Component {

  onClose = (e, toggle) => {
    e.stopPropagation();
    toggle();
  } 

  render() {
    return (
        <Mutation mutation={TOGGLE_MODAL_MUTATION}>
          {(toggleModal) => (
              <Portal selector='#modal'>
                <OverlayStyled>
                  <QuickUpdateStyled>
                    <h1>Update Event</h1>
                    <Closebutton onClick={(e) => this.onClose(e, toggleModal)}>X</Closebutton>
                  </QuickUpdateStyled>
                </OverlayStyled>
              </Portal>
          )}
        </Mutation>
    );
  }
}

export default QuickUpdate;

