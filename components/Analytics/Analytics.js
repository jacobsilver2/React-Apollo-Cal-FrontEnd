import React, { useState } from 'react';
import Center from '../styles/Center';
import Container from '../styles/Container';
import QueryTerms from './QueryTerms';


const Analytics = (props) => {

  return (
    <Container>
      <Center>
        <QueryTerms />
      </Center>
    </Container>
  );
}

export default Analytics;