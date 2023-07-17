import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      alert(`${name} is already in contacts!`);
      return;
    }
    if (name.trim() === '' || number.trim() === '') {
      alert(`${name} Cannot add an empty result!`);
      return;
    }

    addContact(name, number);
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
      />
      <input
        className={styles.TypeText}
        type="tel"
        placeholder="Phone number"
        value={number}
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
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
