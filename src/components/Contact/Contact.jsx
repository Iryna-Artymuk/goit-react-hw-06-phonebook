import { MdClose } from 'react-icons/md';

export const Contact = ({ data }) => {
  console.log(data);
  return (
    <li>
      <div>
        <p>{data.name}</p>
        <p>{data.phone_number}</p>
        <button>
          <MdClose size={24} />
        </button>
      </div>
    </li>
  );
};
