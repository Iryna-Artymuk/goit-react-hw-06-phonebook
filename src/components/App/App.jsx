import { Layout } from 'components/Layout/Layout';
import { ContactsList } from '../ContactsList/ContactsList';
import { ContactForm } from '../Form/Form';
import Modal from '../Modal/Modal';
import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getModalStatus } from '../../redux/selectors';

import { toggleModal } from '../../redux/modalSlice';

export const App = () => {
  const modalActive = useSelector(getModalStatus);
  const dispatch = useDispatch();
  console.log(modalActive);
  const modalAction = () => {
    dispatch(toggleModal(!modalActive));
  };
  return (
    <Layout>
      <button onClick={modalAction}> Add contact </button>
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
