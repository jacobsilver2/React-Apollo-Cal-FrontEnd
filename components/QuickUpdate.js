import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import {TOGGLE_MODAL_MUTATION} from '../lib/withData';
import QuickUpdateStyled from './styles/QuickUpdateStyles';
import Closebutton from './styles/CloseButton';
import { Portal } from './Portal'
import OverlayStyled from './styles/OverlayStyled';



class QuickUpdate extends Component {

  render() {
    return (
        <Mutation mutation={TOGGLE_MODAL_MUTATION}>
          {(updateEvent, { loading, error }) => (
              <Portal selector='#modal'>
                <OverlayStyled>
                  <QuickUpdateStyled>
                    <h1>Welcome to Quick Update</h1>
                    <Closebutton onClick={updateEvent}>X</Closebutton>
                  </QuickUpdateStyled>
                </OverlayStyled>
              </Portal>
          )}
        </Mutation>
    );
  }
}

export default QuickUpdate;

