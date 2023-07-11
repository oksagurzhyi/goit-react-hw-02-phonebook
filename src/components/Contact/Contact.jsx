import React from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

export const Contact = ({ name, number, onDelete }) => {
  return (
    <div>
      <p>
        {name}: {number}
      </p>
      <button type="button" className={css.btnDelete} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};
