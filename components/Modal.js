import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QuickUpdateForm from './QuickUpdate/QuickUpdateForm';
import FocusTrap from 'focus-trap-react';
import Reminders from './Reminders/Reminders';

class Modal extends Component {
  state = { 
    toggle: true,
   }
  
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    })
  }



  render() {
    const {event, modalRef, buttonRef, closeModal, onKeyDown, onClickOutside} = this.props;
    return ReactDOM.createPortal(
      <FocusTrap>
        <aside
          tag='aside'
          role='dialog'
          tabIndex="-1"
          aria-modal="true"
          className="modal-cover"
          onClick={onClickOutside}
          onKeyDown={onKeyDown}
        >
          <div className="modal-area" ref={modalRef}>
            <button
              ref={buttonRef}
              aria-label="Close Modal"
              className="_modal-close"
              onClick={closeModal}
            >
              <span id="close-modal" className="_hide-visual">Close</span>
              <svg className="_modal-close-icon" viewBox="0 0 40 40">
                <path d="M 10,10 L 30,30 M 30,10 L 10,30"/>
              </svg>
            </button>
  
            <div className="modal-body">
              {this.state.toggle ? <QuickUpdateForm event={event} toggle={this.toggle}/> : <Reminders event={event} toggle={this.toggle}/>}
            </div>
          </div>
        </aside>
      </FocusTrap>, document.body
    );
  }
}

export default Modal;




