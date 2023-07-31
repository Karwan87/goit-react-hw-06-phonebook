import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  setFilter,
  setContacts,
  loadContacts,
} from '../redux/actions';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import styles from './var.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  const saveContactsToLocalStorage = () => {
    const contactsToSave = JSON.stringify(contacts);
    localStorage.setItem('contacts', contactsToSave);
  };

  useEffect(() => {
    saveContactsToLocalStorage();
  }, [contacts, saveContactsToLocalStorage]);

  useEffect(() => {
    const contactsFromLocalStorage = JSON.parse(
      localStorage.getItem('contacts')
    );
    if (contactsFromLocalStorage) {
      dispatch(setContacts(contactsFromLocalStorage));
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
      <ContactList onDeleteContact={deleteContactHandler} />
    </div>
  );
};
export default App;
