import { useState } from 'react';
import PropTypes from 'prop-types'
import css from './ContactForm.module.css'

const baseState = {
  name: '',
  number: '',
}

const  ContactForm = ({onSubmit})=> { 
const [state, setState] = useState(baseState)
    
const formSubmit = e => {
    e.preventDefault()
    onSubmit(state)
    setState(baseState)
  }

  const inputChange = e => {
    setState((prev)=>({...prev, [e.target.name]: e.target.value }))
  }
  const {name, number} = state

    return (
      <form className={css.form} onSubmit={formSubmit}>
        <label>
          <p className={css.title}>Name</p>
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={inputChange}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <p  className={css.title}>Number</p>
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={inputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.btn}>Add contact</button>
      </form>
    );
  }


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;
