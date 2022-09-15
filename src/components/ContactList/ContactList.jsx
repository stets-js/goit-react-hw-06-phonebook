import React, { Component } from 'react';
import PropTypes from 'prop-types';



class ContactList extends Component {

    
    
  render() {
      return (
      <ul>
        {this.props.contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button
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
    filteredContacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
  deleteContact: PropTypes.func.isRequired,
  filteredName: PropTypes.string.isRequired,
        }


export default ContactList;
