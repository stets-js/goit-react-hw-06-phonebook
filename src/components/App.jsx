import React, { Component } from 'react';
import nextId from 'react-id-generator';
import Form from './Form'

export default class App extends Component {
  state = {
    contacts: [],
  };

  id = nextId();

  deleteContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  submitHandler = ({ name, number }) => {
    this.setState(prev => (
      {
       contacts: [...prev.contacts, {id: this.id, name: name, number: number}]
     }))    
  }

  render() {
    return (
      <>
        <p>Phonebook</p>
        <Form onSubmit={this.submitHandler} />
        <p>Contacts</p>
        <ul>
          {this.state.contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}{number}
                <button
                  onClick={() => {
                    this.deleteContact(id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
