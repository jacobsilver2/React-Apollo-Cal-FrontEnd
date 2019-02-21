import styled from 'styled-components';

const SidebarStyles = styled.div`
  opacity: 0.95;
  padding: 20px;
  position: relative;
  background: ${props => props.theme.grey};
  position: fixed;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  min-width: 100px;
  /* transform: translateX(100%); */
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 7%;
  .hovertext{
    display: none;
  }

  &:hover {
    width:15%;
    .hovertext{
      display: inline;
      padding-left: 50px;
    }
  };
  header {
    border-bottom: 5px solid ${props => props.theme.black};
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  footer {
    border-top: 10px double ${props => props.theme.black};
    margin-top: 2rem;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
  a {
    color: white;
    font-size: .9rem;
  }
  h3 {
    font-size: .91rem;
    color: white;
  }
`;

export default SidebarStyles;
