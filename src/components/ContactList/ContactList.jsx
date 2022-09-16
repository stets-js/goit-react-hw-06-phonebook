import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css'



class ContactList extends Component {

    
    
  render() {
      return (
      <ul className={css.ul}>
        {this.props.contacts.map(({ id, name, number }) => {
          return (
            <li className={css.li} key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                className={css.btn}
                onClick={() => {
                  this.props.deleteContact(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
  deleteContact: PropTypes.func.isRequired,
  filteredName: PropTypes.string.isRequired,
        }


export default ContactList;
