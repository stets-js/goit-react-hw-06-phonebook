import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    };
    
formSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.resetForm()
  }

  inputChange = e => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value,});
    };
    
    resetForm = () => {
        this.setState({name: '',
    number: '',})
    }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={this.state.name}
            onChange={this.inputChange}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.inputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
