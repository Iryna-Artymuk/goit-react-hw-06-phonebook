import { useState } from 'react';

import { Layout } from 'components/Layout/Layout';
import { ContactsList } from '../ContactsList/ContactsList';
import { ContactForm } from '../Form/Form';
import Modal from '../Modal/Modal';

import IconButton from '../Button/IconButton';
import { MdPersonAdd, MdSearch } from 'react-icons/md';
import { BsSortAlphaDown } from 'react-icons/bs';

import { Filter } from '../Filter/Filter';
import { Sort } from '../Sort/Sort';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getModalStatus } from '../../redux/selectors';

import { toggleModal } from '../../redux/modalSlice';

import css from './App.module.css';

export const App = () => {
  const [activeSort, setActiveSort] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const modalActive = useSelector(getModalStatus);

  const dispatch = useDispatch();
  // console.log(modalActive);
  const modalAction = () => {
    dispatch(toggleModal(!modalActive));
  };

  const toggleSort = () => {
    setActiveSort(!activeSort);
  };

  const toggleFilter = () => setActiveFilter(!activeFilter);
  return (
    <Layout>
      <div className={css.contentWrapper}>
        <h2 className={css.title}>Contacts</h2>
        <Filter activeFilter={activeFilter} />
        <Sort activeSort={activeSort} />

        <IconButton
          onClick={toggleSort}
          type="button"
          aria-label=" sort contacts by name"
          sortButton
        >
          <BsSortAlphaDown />
        </IconButton>
        <IconButton
          onClick={toggleFilter}
          type="button"
          aria-label=" find contact by name"
          searchButton
        >
          <MdSearch />
        </IconButton>
        <IconButton
          onClick={modalAction}
          type="button"
          aria-label=" add contact"
          addContactButton
        >
          <MdPersonAdd />
        </IconButton>

        {modalActive && (
          <Modal togglModal={modalAction}>
            <ContactForm />
          </Modal>
        )}

        <ContactsList />
      </div>
    </Layout>
  );
};
