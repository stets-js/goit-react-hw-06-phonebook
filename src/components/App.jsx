import React, { Component } from 'react';
import nextId from 'react-id-generator';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './App.module.css'

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prev => ({
        contacts: [
          ...prev.contacts,
          { id: nextId(), name: name, number: number },
        ],
      }));
    }
  };

  filterChange = e => {
    this.setState({filter: e.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;

    const lowercasedName = filter.toLowerCase();
    const filteredContacts = this.state.filter !== '' ? contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(lowercasedName)) : [];

    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={css.title}>Contacts</h2>
        <Filter filter={filter} filterChange={this.filterChange} />

        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
          filteredName={filter}
        />
      </div>
    );
  }
}
