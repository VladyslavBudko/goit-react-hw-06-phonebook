import styled from 'styled-components';

export const ContactUl = styled.ul`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
`;

export const ContactLi = styled.li`
display: flex;
// flex-direction: column;
align-items: center;
gap: 10px;
`;


export const DelContactBtn = styled.button`
  display: block;
  text-align: center;

  outline: none;
  
  &:hover {
    background-position: right center;
    color: tomato;
    text-decoration: none;
  }
`;