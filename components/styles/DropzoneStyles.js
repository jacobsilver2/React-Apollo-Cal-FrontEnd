import styled from 'styled-components';

const getColor = (props) => {
  if (props.isDragReject) {
    return '#c66';
  }
  if (props.isDragActive) {
    return '#6c6';
  }
  return '#666';
};

const DndStyles = styled.div`
display: grid;
grid-template-columns: .5fr .5fr;
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${props => getColor(props)};
  border-style: ${props => props.isDragReject || props.isDragActive ? 'solid' : 'dashed'};
  background-color: ${props => props.isDragReject || props.isDragActive ? '#eee' : ''};
`;

const PreviewStyles = styled.div`
  width: 200px;
  height: 200px;
`;

export {getColor, DndStyles, ImageContainer, PreviewStyles}

