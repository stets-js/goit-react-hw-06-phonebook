import React, { Component } from 'react';
import nextId from "react-id-generator";

export default class App extends Component  {
  state = {
    contacts: [{ id: nextId(), name: "Java" },
    { id: nextId(), name: "Pyton" }],
  name: ''
  }
  id = nextId();

  deleteContact = (contactId) => {
    this.setState((prev) =>( {
      contacts: prev.contacts.filter(contact => contact.id !== contactId)
    }))
  }
  
  render() {
    
    return (
      <>
      <p>Phonebook</p>
      <label>
        <p>Name</p>
        <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
        />
        <button>Add contact</button>
      </label>
        <p>Contacts</p>
        <ul>
          {this.state.contacts.map(({id, name}) => {
            return <li key={id}>{name}<button onClick={()=>{this.deleteContact(id)}}>Delete</button></li> 
          })}
        </ul>
      </>
    )
  }
};
