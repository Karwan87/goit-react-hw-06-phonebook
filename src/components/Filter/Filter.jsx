import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import { setFilter } from '../../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = value => {
    dispatch(setFilter(value));
  };

  return (
    <input
      className={styles.inputsForm}
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={e => handleFilterChange(e.target.value)}
    />
  );
};

export default Filter;
