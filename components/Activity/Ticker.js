import React, { Component } from 'react'


class Ticker extends Component {

  componentDidMount() {
    this.props.subscribeToNewEvents()
  }



  render() {
    const {events} = this.props.data
    const latest = events[events.length - 1];
    return (
      <div>
        <p>The most recently added event is:</p>
        <p>{latest.title}</p>
      </div>
    );
  }
}

export default Ticker;