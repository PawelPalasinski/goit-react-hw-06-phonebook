import { useSelector } from 'react-redux';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

function Phonebook() {
  const getContacts = state => state.contacts;
  const contacts = useSelector(getContacts);
  console.log(contacts);
  console.log(contacts.length);

  return (
    <>
      <ContactForm />
      {contacts.length > 0 && <Filter />}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Currently your phonebook has no contacts. Please add them.</p>
      )}
    </>
  );
}

export default Phonebook;