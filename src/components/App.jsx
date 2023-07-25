import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../redux/contactsSlice';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { setFilter } from '../redux/filterSlice';
import Filter from './Filter/Filter';
import styles from './var.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(addContact(JSON.parse(storedContacts)));
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

  // const App = () => {
  //   const dispatch = useDispatch();
  //   const [contactName, setContactName] = useState('');
  //   const [contactNumber, setContactNumber] = useState('');
  //   const contacts = useSelector(state => state.contacts);
  //   const filter = useSelector(state => state.filter);

  //   useEffect(() => {
  //     const storedContacts = localStorage.getItem('contacts');
  //     if (storedContacts) {
  //       dispatch(addContact(JSON.parse(storedContacts)));
  //     }
  //   }, [dispatch]);

  //   const addContactHandler = (name, number) => {
  //     const newContact = {
  //       id: nanoid(),
  //       name: name.trim(),
  //       number: number.trim(),
  //     };

  //     dispatch(addContact(newContact));
  //     setContactName('');
  //     setContactNumber('');
  //   };

  //   const deleteContactHandler = id => {
  //     dispatch(deleteContact(id));
  //   };
  //   const changeFilterHandler = filterValue => {
  //     dispatch(setFilter(filterValue));
  //   };

  //   console.log('Contacts:', contacts);
  //   console.log('Filter:', filter);

  return (
    <div className={styles.ContactContainer}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContactHandler} />

      <h2>Contacts</h2>
      <Filter onChangeFilter={changeFilterHandler} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={deleteContactHandler}
      />
    </div>
  );
};

//   return (
//     <div className={styles.ContactContainer}>
//       <h1>Phonebook</h1>
//       <ContactForm
//         onAddContact={addContactHandler}
//         name={contactName}
//         number={contactNumber}
//       />

//       <h2>Contacts</h2>
//       <Filter onChangeFilter={changeFilterHandler} />
//       <ContactList onDeleteContact={deleteContactHandler} />
//     </div>
//   );
// };

export default App;
