import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/contacts';
import styles from './ContactList.module.css';

const filtersContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );


const ContactList = () => {

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const contactsList = filtersContacts(contacts, filter);

  const deleteItem = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      <ul>
        {contactsList.length === 0 ? null : (
          <>
            {contactsList.map(contact => {
              return (
                <li key={contact.id}>
                  <p>
                    <span>{contact.name} : </span>
                    {contact.number}
                  </p>
                  <button
                    type="button"
                    onClick={() => deleteItem(contact.id)}
                  >
                    ⛌
                  </button>
                </li>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
