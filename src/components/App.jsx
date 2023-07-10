import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const isContactInPhonebook = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isContactInPhonebook) {
      return alert('This contact is already exist in your phonebook');
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  onDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizeName = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeName)
    );

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>

        <ContactForm addContact={this.addContact} />
        <h2> Contacts:</h2>
        <Filter value={filter} changeFilter={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.onDelete} />
      </div>
    );
  }
}
