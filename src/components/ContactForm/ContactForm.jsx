import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/actions';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Cannot add an empty result!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };
  return (
    <form className={styles.InputsForm} onSubmit={handleSubmit}>
      <input
        className={styles.TypeText}
        type="text"
        placeholder="Name"
        value={name}
        pattern="^[A-Za-z.'\- ]+$"
        onChange={e => setName(e.target.value)}
      />
      <input
        className={styles.TypeText}
        type="tel"
        placeholder="Phone number"
        value={number}
        pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
        onChange={e => setNumber(e.target.value)}
      />
      <div className={styles.ButtonContainer}>
        <button className={styles.SubmitButton} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
