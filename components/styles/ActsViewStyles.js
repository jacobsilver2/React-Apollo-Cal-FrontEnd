import styled from 'styled-components';

const Center = styled.div`
  text-align: center;
`;

const ActsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  overflow: auto;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  
`;

const ActsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

export {Center, ActsGrid, ActsList}