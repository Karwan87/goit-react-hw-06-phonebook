import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.DataForm}>
      {contact.name}: {contact.number}{' '}
      <button
        className={styles.DeleteButton}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactItem;
