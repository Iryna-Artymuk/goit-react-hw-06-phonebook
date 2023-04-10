import { useSelector } from 'react-redux';
import { getStoreContacts } from '../../redux/selectors';
import { getStoreFilter } from '../../redux/selectors';
import { Contact } from '../Contact/Contact';
export const ContactsList = data => {
  // console.log(data);
  const contactsList = useSelector(getStoreContacts);
  const filter = useSelector(getStoreFilter);
  console.log(filter);

  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <ul>
      {filteredContacts.map(contactData => (
        <Contact key={contactData.id} data={contactData} />
      ))}
    </ul>
  );
};
