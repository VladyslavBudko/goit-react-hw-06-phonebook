import styled from 'styled-components';

export const ContactFormLabel = styled.label`
display: inline-flex;
flex-direction: column;
align-items: center;
margin: 20px;
`;

export const AddContactBtn = styled.button`
  display: block;
  text-align: center;

  outline: none;
  
  &:hover {
    background-position: right center;
    color: tomato;
    text-decoration: none;
  }
`;