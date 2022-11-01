import React from 'react';
import { Section } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import Form from './Form/Form';

export class App extends React.Component {
  // state = {
  //   contacts: [],
  //   name: '',
  // };

 

  render() {
    return (
      <Section>
        <h1>Phonebook</h1>
        <Form></Form>

        {/* <Contacts contacts={this.state.contacts} /> */}
      </Section>
    );
  }
}
