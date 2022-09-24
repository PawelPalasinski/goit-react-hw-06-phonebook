// import { connect } from 'react-redux';
// import * as actions from '../../redux/actions';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemove, children }) => {
  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      {children}
      <ul>
        {contacts.length === 0 ? null : (
          <>
            {contacts.map(contact => {
              return (
                <li key={contact.id}>
                  <p>
                    <span>{contact.name} : </span>
                    {contact.number}
                  </p>
                  <button
                    onClick={() => {
                      onRemove(contact.id);
                    }}
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

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
