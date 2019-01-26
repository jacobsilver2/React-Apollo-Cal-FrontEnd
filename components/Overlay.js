import React from 'react';
import styled from 'styled-components';

const Olay = styled.div`
  background: grey;
  opacity: 60%;
  z-index: 99;
`;

const Overlay = () => (
  <Olay />
  
);

export default Overlay;