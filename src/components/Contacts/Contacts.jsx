import React from 'react';
import PropTypes from 'prop-types';
import {ContactUl} from './Contacts.styled'

import { nanoid } from 'nanoid';

const ContactList = ({ contacts, onDeleteContact }) => {
  console.log(contacts);
  return (
    <ContactUl>
      {contacts.map(({ name, number, id }) => (
        <li key={nanoid()}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ContactUl>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
