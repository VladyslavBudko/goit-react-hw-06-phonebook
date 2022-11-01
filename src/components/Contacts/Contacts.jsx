import React from 'react';

export const Contacts = ({ contacts }) => {
  return (
    <>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(contact => (
          <li>{contact}</li>
        ))}
      </ul>
    </>
  );
};
