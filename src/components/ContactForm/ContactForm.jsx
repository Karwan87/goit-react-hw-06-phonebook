import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = ({
  onAddContact,
  name: initialName,
  number: initialNumber,
}) => {
  const [name, setName] = useState(initialName || '');
  const [number, setNumber] = useState(initialNumber || '');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted!');
    console.log('Name:', name, 'Number:', number);
    const namePattern = /^[A-Za-z.'\- ]+$/;
    const numberPattern = /^[1-9]+$/;
    // /^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$/;

    if (!namePattern.test(name) || !numberPattern.test(number)) {
      alert('Invalid input! Name and number must match the specified pattern.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };
    onAddContact(newContact);

    setName('');
    setNumber('');
  };

  // dispatch(addContact(newContact));

  return (
    <form className={styles.InputsForm} onSubmit={handleSubmit}>
      <input
        className={styles.TypeText}
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className={styles.TypeText}
        type="tel"
        placeholder="Phone number"
        value={number}
        onChange={e => setNumber(e.target.value)}
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
  name: PropTypes.string, // Dodaj deklarację propa 'name'
  number: PropTypes.string, // Dodaj deklarację propa 'number'
};

export default ContactForm;
