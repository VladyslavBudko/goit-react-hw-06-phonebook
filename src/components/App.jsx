import React, { useState, useEffect } from 'react';
import { Section } from './App.styled';
import ContactList from './Contacts/Contacts';
import ContactForm from './Form/Form';
// import ContactFormFormik from './FormFofmik/FormFormik';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

// const useLocalStorage = ( key, defaultValue) => {
//   const [satate, setState] = useState(() => {
//     const contacts = localStorage.getItem('contacts');
//     return  parsedContacts = JSON.parse(contacts);
//   });
//   return [satate, setState];
// }

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(prevState => prevState + parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    // console.log(data.name);
    const { name, number } = data;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isNameExist = contacts.some(
      newContact => newContact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${name} is alredy in contacts`);
      return;
    }

    setContacts(prevState => [newContact, ...prevState]);
  };

  const changeFilter = e => {
    setFilter(prevState => prevState + e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    console.log(contacts)
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const onDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.contacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();
  console.log(visibleContacts)

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm onSubmitData={formSubmitHandler}></ContactForm>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={onDeleteContact}
      />
    </Section>
  );
}

// export class App extends React.Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);
//   // console.log(parsedContacts);
//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

// formSubmitHandler = data => {
//   // console.log(data.name);
//   const { name, number } = data;

//   const newContact = {
//     id: nanoid(),
//     name,
//     number,
//   };

//   const isNameExist = this.state.contacts.some(
//     newContact => newContact.name.toLowerCase() === name.toLowerCase()
//   );

//   if (isNameExist) {
//     alert(`${name} is alredy in contacts`);
//     return;
//   }

//   this.setState(({ contacts }) => ({
//     contacts: [newContact, ...contacts],
//   }));
// };
// // console.log(this.state);

// changeFilter = e => {
//   this.setState({ filter: e.currentTarget.value });
// };

// getVisibleContacts = () => {
//   const { filter, contacts } = this.state;
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// onDeleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };

// render() {
// const { filter } = this.state;
// const visibleContacts = this.getVisibleContacts();

// return (
//   <Section>
//     <h1>Phonebook</h1>
//     <ContactForm onSubmitData={this.formSubmitHandler}></ContactForm>
//     {/* !!!!! Формик не работает, исправить */}
//     {/* <ContactFormFormik onSubmitData={this.formSubmitHandler}></ContactFormFormik> */}
//     <h2>Contacts</h2>
//     <Filter value={filter} onChange={this.changeFilter} />
//     <ContactList
//       contacts={visibleContacts}
//       onDeleteContact={this.onDeleteContact}
//     />
//   </Section>
// );
//   }
// }
