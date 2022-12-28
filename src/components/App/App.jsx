import { useState } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import useLocalStorage from 'components/hooks/useLocalStorage';

const LS_KEY = 'contacts';

const App = () => {
  const [contacts, setContacts] = useLocalStorage(LS_KEY, []);
  const [filter, setFilter] = useState('');

  const deleteContact = contactId => {
    setContacts(pS => pS.filter(({ id }) => id !== contactId));
  };

  const filterContact = value => {
    setFilter(value);
  };

  const addContact = contact => {
    const find = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (find) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    setContacts(pS => [...pS, contact]);
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: '0 10px' }}>
      <h2>Phonebook</h2>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterContact={filterContact} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
