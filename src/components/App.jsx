import { useState, useEffect } from 'react';
import nextId from 'react-id-generator';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './App.module.css';

const abonentsArray = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || abonentsArray
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId)
    );
  };

  const addContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prev => [...prev, { id: nextId(), name: name, number: number }])
    }
  };

  const filterChange = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={css.title}>Contacts</h2>
      <Filter filter={filter} filterChange={filterChange} />

      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        filteredName={filter}
      />
    </div>
  );
};

export default App;
