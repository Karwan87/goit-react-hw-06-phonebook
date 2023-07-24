import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  let filter = useSelector(state => state.filter);
  if (typeof filter === 'object') {
    filter = '';
  }
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      className={styles.inputsForm}
      type="text"
      placeholder="Search contacts"
      value={filter || ''}
      onChange={handleFilterChange}
    />
  );
};

export default Filter;
