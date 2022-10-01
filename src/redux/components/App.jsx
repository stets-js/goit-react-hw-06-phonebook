import ContactForm from './ContactForm/addContactForm';
import ContactList from './ContactList/ContactList';
//import Filter from './Filter';
import css from './App.module.css';


const App = () => {
return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
       {/* <Filter /> */}
      <ContactList /> 
    </div>
  );
};

export default App;
