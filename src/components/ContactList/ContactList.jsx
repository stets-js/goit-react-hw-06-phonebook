import PropTypes from 'prop-types';
import css from './ContactList.module.css'

const ContactList = ({filteredName, deleteContact, contacts})=> {

    if (filteredName === '') {
      return (
        <ul className={css.ul}>
          {contacts.map(({ id, name, number }) => {
            return (
              <li className={css.li} key={id}>
                <p>
                  {name}: {number}
                </p>
                <button
                  className={css.btn}
                  onClick={() => {
                    deleteContact(id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      );
    } else {
      
      return (
        <ul className={css.ul}>
          {contacts.filter(contacts => contacts.name.toLowerCase().includes(filteredName.toLowerCase())).map(({ id, name, number }) => {
            return (
              <li className={css.li} key={id}>
                <p>
                  {name}: {number}
                </p>
                <button
                  className={css.btn}
                  onClick={() => {
                    deleteContact(id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )
      
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
