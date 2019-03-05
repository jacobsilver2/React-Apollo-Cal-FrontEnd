import React, {useState} from 'react';
import Signup from './Signup';
import Signin from './Signin';
import RequestReset from './RequestReset';
import styled from 'styled-components';
import Button from '../styles/SickButton';
import Center from '../styles/Center';
import Container from '../styles/Container';

const Columns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* grid-gap: 20px; */
`;

const NewButton = styled(Button)`
  opacity: ${props => props.selected ? 1.0 : 0.5};
  width: 75%;
  text-transform: none;
  transition: all 0.5s;
  &[disabled] {
    opacity: 0.5;
  }
`;


const SignInContainer = (props) => {
  const [selected, setSelected] = useState('login');

  function changeSelected(active) {
    setSelected(active);
  }

  return (
    <Container>
    <Center>
      <Columns>
        <div></div>
        {selected === 'login' && <Signin />}
        {selected === 'reset' && <RequestReset /> }
        {selected === 'signup' && <Signup /> }
        <div></div>
      </Columns>
      <NewButton selected={selected=== 'login'} onClick={()=> changeSelected('login')}>Sign In</NewButton>
      <NewButton selected={selected === 'signup'} onClick={()=> changeSelected('signup')}>Sign Up</NewButton>
      <NewButton selected={selected === 'reset'} onClick={()=> changeSelected('reset')}>Forgot Password?</NewButton>
    </Center>
    </Container>
  );
}

export default SignInContainer;
