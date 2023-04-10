import { MdClose } from 'react-icons/md';
import { deleteContact } from '../../redux/contactsListSlice';
import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
export const Contact = ({ data }) => {
  //   console.log(data);
  const dispatch = useDispatch();
  const handelClick = () => {
    dispatch(deleteContact(data.id));
  };
  return (
    <li
      style={{
        width: '100%',
      }}
    >
      <div className={css.contactWrapper}>
        <p>{data.name}</p>
        <p>{data.phone_number}</p>
        <button onClick={handelClick}>
          <MdClose size={24} />
        </button>
      </div>
    </li>
  );
};
