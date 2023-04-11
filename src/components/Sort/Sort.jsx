import { useDispatch } from 'react-redux';

import { sortAtoZ } from '../../redux/contactsListSlice';
import { sortZtoA } from '../../redux/contactsListSlice';

import css from './Sort.module.css';
import clsx from 'clsx';
export function Sort({ activeSort }) {
  const dispatch = useDispatch();
  const handelSelect = event => {
    console.log(event.target.value === 'AtoZ');
    event.target.value === 'AtoZ' ? dispatch(sortAtoZ()) : dispatch(sortZtoA());
  };

  return (
    <div
      className={clsx(css.sortWrapper, {
        [css.activeSort]: activeSort,
      })}
    >
      <label htmlFor="sortByName" className={css.sortLabel}>
        sort by name{' '}
      </label>
      <select
        className={css.sort}
        name="sortByName"
        onChange={handelSelect}
        id="sortByName"
      >
        <option></option>
        <option value="AtoZ">A to Z</option>
        <option value="ZtoA">Z to A</option>
      </select>
    </div>
  );
}
