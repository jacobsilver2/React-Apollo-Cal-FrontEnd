import styled from 'styled-components';

const ActsViewPickerStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid ${props => props.theme.lightgrey};
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
    .active {
      background-color: ${props => props.theme.mainColor};
  }

`;

export default ActsViewPickerStyles;
