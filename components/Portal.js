import React from 'react'
import ReactDOM from 'react-dom'

export class Portal extends React.Component {

  componentDidMount () {
    this.element = document.querySelector(this.props.selector);
    this.forceUpdate();
    document.addEventListener('keydown', this.escapeClicked, false);
    // document.addEventListener('click', this.documentClicked, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escapeClicked, false);
    // document.removeEventListener('click', this.documentClicked, false);
  }

  modalRef = React.createRef();

  escapeClicked = e => {
    if (e.keyCode === 27) {
      this.props.closeFn();
    }
  }

  documentClicked = e => {
    if (e.target === this.modalRef.current || this.modalRef.current.contains(e.target)) return;
    this.props.closeFn();
  }

  render () {
    if (this.element === undefined) {
      return null
    }
    // const { children } = this.props;
    // const childrenWithProps = React.Children.map(children, child =>
    //   React.cloneElement(child, { modalRef: this.modalRef })
    // );

    return ReactDOM.createPortal(this.props.children, this.element)
  }
}