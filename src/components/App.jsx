import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  setContactsArray,
} from 'redux/contactsSlice';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { setFilter } from '../redux/filterSlice';
import Filter from './Filter/Filter';
import styles from './var.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contactsArray = useSelector(state => state.contactsArray);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(setContactsArray(JSON.parse(storedContacts)));
    }
  }, [dispatch]);

  const addContactHandler = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    dispatch(addContact(newContact));
  };

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
    dispatch(
      setContactsArray(contactsArray.filter(contact => contact.id !== id))
    );
  };

  const changeFilterHandler = filterValue => {
    dispatch(setFilter(filterValue));
  };

  return (
    <div className={styles.ContactContainer}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContactHandler} />

      <h2>Contacts</h2>
      <Filter onChangeFilter={changeFilterHandler} />
      <ContactList
        contacts={contactsArray}
        filter={filter}
        onDeleteContact={deleteContactHandler}
      />
    </div>
  );
};

export default App;
