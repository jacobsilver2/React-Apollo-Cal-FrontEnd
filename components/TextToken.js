import React, { Component } from "react";
import { DragSource } from "react-dnd";

const itemSource = {
  beginDrag(props) {
    const item = { text: props.text };
    return item;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    return props.handleDrop(props.text);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class TextToken extends Component {
  render() {
    const { isDragging, connectDragSource, text } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      <div className="tag" style={{ opacity: opacity }}>
        {text}
      </div>
    );
  }
}

export default DragSource("token", itemSource, collect)(TextToken);
