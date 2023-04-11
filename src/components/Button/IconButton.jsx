import css from './IconButton.module.css';
import clsx from 'clsx';
const IconButton = ({
  children,
  onClick,
  type,
  addContactButton,
  searchButton,
  sortButton,
  ...allyProps
}) => {
  return (
    <button
      className={clsx(css.button, {
        [css.addContactButton]: addContactButton,
        [css.searchButton]: searchButton,
        [css.sortButton]: sortButton,
      })}
      type={type}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
};

export default IconButton;
