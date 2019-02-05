import styled from 'styled-components';

const SingleActStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  text-align: center;
  a {
    cursor: pointer;
  }
  h3 {
    text-decoration: underline;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
  p {
    font-weight: 2;
  }
  .details {
    margin: 1rem;
    font-size: 1.5rem;
    align-self: center;
  }
  .shows {
    margin: 1rem;
    font-size: 1rem;
    align-self: center;
  }
  .react-vis {
    margin: 1rem;
    font-size: 1rem;
    align-self: center;
  }
`;

export default SingleActStyles;