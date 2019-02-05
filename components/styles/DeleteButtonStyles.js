import styled from 'styled-components';

const DeleteButtonStyles = styled.button`
background: transparent;
border: 1px solid ${props => props.theme.mainColor};
border-radius: 2em;
color: ${props => props.theme.mainColor};
display: inline-block;
font-size: 12px;
height: 20px;
line-height: 2px;
margin: 0 0 8px;
padding: 0;
text-align: center;
width: 20px;
`;


export default DeleteButtonStyles;