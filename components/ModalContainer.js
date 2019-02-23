import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Modal from './Modal';
import {TOGGLE_MODAL_MUTATION} from './globals/mutations/mutations';




class ModalContainer extends Component {

  componentDidMount() {
    this.closeButton.focus();
    this.toggleScrollLock();
  }

  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
    };

  closeModal = (toggleModalMutation) => {
    this.setState({ isShown: false });
    // this.TriggerButton.focus();
    this.toggleScrollLock();
    toggleModalMutation();
  };

  onKeyDown = (event, toggleModalMutation) => {
    if (event.keyCode === 27) { this.closeModal(toggleModalMutation); }
  };

  onClickOutside = (event, toggleModalMutation) => {
    if (this.modal && this.modal.contains(event.target)) return
    this.closeModal(toggleModalMutation);
  };

  render() {
    return (
      <Mutation mutation={TOGGLE_MODAL_MUTATION}>
        {(toggleModal) => (
            <Modal 
              event={this.props.event}
              modalRef={(n) => (this.modal = n)}
              buttonRef={(n) => (this.closeButton = n)} 
              closeModal={() => this.closeModal(toggleModal)}
              onKeyDown={(e) => this.onKeyDown(e, toggleModal)}
              onClickOutside={(e) => this.onClickOutside(e, toggleModal)}
            />) 
        }
      </Mutation>
    );
  }
}

export default ModalContainer;
