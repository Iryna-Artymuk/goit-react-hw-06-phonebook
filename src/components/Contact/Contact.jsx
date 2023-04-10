import { MdClose } from 'react-icons/md';
import { deleteContact } from '../../redux/contactsListSlice';
import { useDispatch } from 'react-redux';

export const Contact = ({ data }) => {
  //   console.log(data);
  const dispatch = useDispatch();
  const handelClick = () => {
    dispatch(deleteContact(data.id));
  };
  return (
    <li>
      <div>
        <p>{data.name}</p>
        <p>{data.phone_number}</p>
        <button onClick={handelClick}>
          <MdClose size={24} />
        </button>
      </div>
    </li>
  );
};
