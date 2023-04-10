import { Layout } from 'components/Layout/Layout';
import { ContactsList } from '../ContactsList/ContactsList';
import { ContactForm } from '../Form/Form';
import Modal from '../Modal/Modal';
import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getModalStatus } from '../../redux/selectors';

import { toggleModal } from '../../redux/modalSlice';
import { sortAtoZ } from '../../redux/contactsListSlice';
import { sortZtoA } from '../../redux/contactsListSlice';

export const App = () => {
  const modalActive = useSelector(getModalStatus);
  const dispatch = useDispatch();
  // console.log(modalActive);
  const modalAction = () => {
    dispatch(toggleModal(!modalActive));
  };

  const handelSelect = event => {
    console.log(event.target.value === 'AtoZ');
    event.target.value === 'AtoZ' ? dispatch(sortAtoZ()) : dispatch(sortZtoA());
  };
  return (
    <Layout>
      <button onClick={modalAction}> Add contact </button>
      <label htmlFor="sortByName">sort by name</label>

      <select name="sortByName" onChange={handelSelect} id="sortByName">
        <option></option>
        <option value="AtoZ">A to Z</option>
        <option value="ZtoA">Z to A</option>
      </select>
      {modalActive && (
        <Modal togglModal={modalAction}>
          <ContactForm />
        </Modal>
      )}

      <Filter />
      <ContactsList />
    </Layout>
  );
};
