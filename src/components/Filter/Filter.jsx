import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ value, changeFilter }) => (
  <label className={css.labelFilter}>
    Find contacts by name:
    <input
      className={css.inputFilter}
      type="text"
      value={value}
      onChange={changeFilter}
    />
  </label>
);
