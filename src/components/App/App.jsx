import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { BeatLoader } from 'react-spinners';
import { fetchContacts, addContact } from 'redux/operations';
import { filter } from 'redux/filterSlice';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilterValue,
} from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filterValue = useSelector(selectFilterValue);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = contact => {
    const find = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (find) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(contact));
  };

  const filterContact = value => {
    dispatch(filter(value));
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div style={{ padding: '0 20px' }}>
      <h2>Phonebook</h2>
      <ContactForm onAddContact={onAddContact} />
      <h2>Contacts</h2>
      <Filter onFilterContact={filterContact} />
      {isLoading && (
        <BeatLoader
          size="12px"
          color="#008080"
          cssOverride={{
            padding: '20px',
          }}
        />
      )}
      {contacts.length > 0 && (
        <ContactList contacts={filteredContacts} isDeleting={isLoading} />
      )}
      {error && <p>Something went wrong... {error}</p>}
    </div>
  );
};

export default App;
