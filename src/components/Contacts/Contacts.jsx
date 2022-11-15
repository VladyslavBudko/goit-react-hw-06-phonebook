import React from 'react';
import PropTypes from 'prop-types';
import {ContactUl, ContactLi, DelContactBtn} from './Contacts.styled'

import { nanoid } from 'nanoid';

const ContactList = ({ contacts, onDeleteContact }) => {
  // console.log(contacts);
  return (
    <ContactUl>
      {contacts && contacts.map(({ name, number, id }) => (
        <ContactLi key={nanoid()}>
          <p>
            {name}: {number}
          </p>
          <DelContactBtn type="DelContactBtn" onClick={() => onDeleteContact(id)}>
            Delete
          </DelContactBtn>
        </ContactLi>
      ))}
    </ContactUl>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
