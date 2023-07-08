import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  const totalNumberOfContacts = contacts.length;
  console.log(totalNumberOfContacts);
  return totalNumberOfContacts > 0 ? (
    <ul className={css.contactItems}>
      Contacts:
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
  ) : (
    <p>There are no contacts in your phonebook!</p>
  );
};
