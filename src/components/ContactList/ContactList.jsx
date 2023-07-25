import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);
  console.log(
    'Redux State:',
    useSelector(state => state)
  );
  console.log('Filtered Contacts:', contacts);

  let filteredContacts = contacts;

  if (!Array.isArray(contacts) || contacts.length === 0) {
    return;
  }

  console.log('Filtered Contacts:', filteredContacts);

  return (
    <ul className={styles.ManageResults}>
      {Array.isArray(filteredContacts) &&
        filteredContacts.map(contact => (
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
