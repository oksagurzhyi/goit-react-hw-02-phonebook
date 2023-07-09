import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  const totalNumberOfContacts = contacts.length;

  return totalNumberOfContacts > 0 ? (
    <>
      <h3> Contacts:</h3>
      <ul className={css.contactItems}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            {name}: {number}
            <button
              type="button"
              className={css.btnDelete}
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <p>There are no contacts in your phonebook!</p>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDelete: PropTypes.func.isRequired,
};
