import React, { Component } from "react";
import { DropTarget } from "react-dnd";

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  };
}

class ReminderMessage extends Component {
  render() {
    const {
      name,
      placeholder,
      value,
      change,
      connectDropTarget,
      hovered,
      width,
      height,
      item
    } = this.props;
    const backgroundColor = hovered ? '#1a8fff' : "white";
    return connectDropTarget(
      <textarea
        style={{ width: width, height: height, background: backgroundColor }}
        name={name}
        placeholder={placeholder}
        value={value}
        required
        onChange={change}
      />
    );
  }
}

export default DropTarget("token", {}, collect)(ReminderMessage);
