import React from 'react';
import styled from 'styled-components';
import Act from './ActList';

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  height: 75%;
  background-color: white;;
  border: 1px solid #3A3A3A;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 10em);
  overflow-x: hidden;
`;

const Column = styled.div`
  padding: 0.5em;
  background-color: ${props => props.theme.lightgrey};
  color: ${props => props.theme.black};
  font-weight: 900;
`;

const Body = styled.div`
  display: grid;
  grid-row-gap: 1px;
  background-color: #e8e8e7;
  overflow: auto;
`;



const ActsListContainer = ({acts}) => {
  const actsRow = acts.map(act => <Act act={act}/>)
  return (
    <Container>
      <Header>
        <Column>Name</Column>
        <Column>Contact Email</Column>
        <Column>Notes</Column>
        <Column>Edit</Column>
        <Column>Delete</Column>
      </Header>
      <Body>
        {actsRow}
      </Body>
    </Container>
  );
}

export default ActsListContainer;