import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  console.log(
    'Redux State:',
    useSelector(state => state)
  );
  console.log('Filtered Contacts:', contacts);

  if (!Array.isArray(contacts) || contacts.length === 0) {
    return <div>No contacts found.</div>;
  }

  let filteredContacts = contacts;

  if (filter) {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  console.log('Filtered Contacts:', filteredContacts);

  if (filteredContacts.length === 0) {
    return <div>No contacts found.</div>;
  }

  return (
    <ul className={styles.ManageResults}>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
