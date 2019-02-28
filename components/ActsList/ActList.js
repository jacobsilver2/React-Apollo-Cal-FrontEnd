import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 10em);
  grid-template-rows: 3.75rem;
  align-items: center;
  background-color: white;
  &:hover{
    background-color: #e7eff7;
  }
`;

const Cell = styled.div`
  padding: 0.5em;
`;

const ActList = ({act}) => {
  

  return (
    <Row>
      <Cell>{act.name}</Cell>
      <Cell>{act.email}</Cell>
      <Cell>{act.notes.flat()}</Cell>
      <Cell><Link href={{ pathname: "updateAct", query: { id: act.id } }}><a>Edit ✏️</a></Link></Cell>
      <Cell>Delete Act (not working)</Cell>
    </Row>
  );
}

export default ActList;

