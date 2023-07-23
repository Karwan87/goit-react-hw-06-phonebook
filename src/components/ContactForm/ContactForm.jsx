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

    const namePattern = /^[A-Za-z.'\- ]+$/;
    const numberPattern =
      /^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$/;

    if (!namePattern.test(name) || !numberPattern.test(number)) {
      alert('Invalid input! Name and number must match the specified pattern.');
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
        onChange={e => setName(e.target.value)}
        pattern="^[A-Za-z.'\- ]+$"
        required
      />
      <input
        className={styles.TypeText}
        type="tel"
        placeholder="Phone number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
        required
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
