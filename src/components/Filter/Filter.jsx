import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <input
      className={styles.inputsForm}
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={e => onChangeFilter(e.target.value)}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
