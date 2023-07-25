import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { setFilter } from '../../redux/filterSlice';

const Filter = ({ value, onChangeFilter }) => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue));
    onChangeFilter(filterValue);
  };

  return (
    <input
      className={styles.inputsForm}
      type="text"
      placeholder="Search contacts"
      value={value || ''}
      onChange={handleFilterChange}
    />
  );
};

export default Filter;
