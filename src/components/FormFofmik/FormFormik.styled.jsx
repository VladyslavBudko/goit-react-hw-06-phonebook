import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  border-radius: 2px;
  border: 2px solid black;
  gap: 10px;
  padding: 10px;
`;

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
