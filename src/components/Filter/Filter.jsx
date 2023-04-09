import { getStoreFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';
// фільтер бере своє значення з store і на події onChange відправляє action
// який обробляє filterReducer і перезаписує
// значення фільтру в store
export const Filter = () => {
  const filterValue = useSelector(getStoreFilter);

  return <input type="text" value={filterValue} placeholder="find contact" />;
};
