import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

// const ContactList = () => {
//   const contacts = useSelector(state => state.contacts);
//   const filter = useSelector(state => state.filter || '');

//   if (!contacts) {
//     return <div>No contacts found.</div>;
//   }

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <ul className={styles.ManageResults}>
//       {filteredContacts.map(contact => (
//         <ContactItem key={contact.id} contact={contact} />
//       ))}
//     </ul>
//   );
// };
// export default ContactList;

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  if (!contacts) {
    return <div>No contacts found.</div>;
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes((filter || '').toLowerCase())
  );

  if (filteredContacts.length === 0) {
    return <div>No contacts found.</div>;
  }

  return (
    <ul className={styles.ManageResults}>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
