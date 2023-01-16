import { useSelector, useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { filter } from 'redux/filterSlice';
import { getContacts, getFilterValue } from 'redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filterContact = value => {
    dispatch(filter(value));
  };

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

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div style={{ padding: '0 10px' }}>
      <h2>Phonebook</h2>
      <ContactForm onAddContact={onAddContact} />
      <h2>Contacts</h2>
      <Filter onFilterContact={filterContact} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
