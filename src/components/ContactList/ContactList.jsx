import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactList.module.css';

const ContactList = ({ contacts, isDeleting }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id}>
          <p className={css.text}>
            <span>{name}</span>
            <span>{phone}</span>
            <button
              className={css.btn}
              type="button"
              onClick={() => handleDelete(id)}
              disabled={isDeleting}
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ).isRequired,
};

export default ContactList;
