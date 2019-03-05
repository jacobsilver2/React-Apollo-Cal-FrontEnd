import styled from 'styled-components';
import AuthContainer from '../components/Auth/AuthContainer';


const Columns = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
`;


const signup = (props) => {
  return (
    <AuthContainer />
  );
}

export default signup;