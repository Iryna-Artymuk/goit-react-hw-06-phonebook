import { useSelector } from 'react-redux';
import { getStoreContacts } from '../../redux/selectors';
import { getStoreFilter } from '../../redux/selectors';
import { Contact } from '../Contact/Contact';
export const ContactsList = data => {
  const contactsList = useSelector(getStoreContacts);
  const filter = useSelector(getStoreFilter);
  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filteredContacts.map(contactData => (
        <Contact data={contactData} />
      ))}
    </ul>
  );
};
