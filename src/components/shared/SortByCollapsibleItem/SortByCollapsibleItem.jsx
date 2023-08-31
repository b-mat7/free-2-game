import { useContext } from 'react';
import { SortByContext } from '../../../contexts/SortByContext';

import styles from './SortByCollapsibleItem.module.scss'

const SortByCollapsibleItem = ({ options }) => {

  const { sortBy, setSortBy } = useContext(SortByContext);

  return (
    <>
      {options.map((option) => (
        <article className={styles.collapsible_item} key={option.value}>
          <input
            type="checkbox"
            name={option.value}
            id={option.value}
            onChange={(event) => setSortBy(event.target.value)}
            value={option.value}
            checked={sortBy === option.value}
          />
          <label
            htmlFor={option.value}
          // value={option.value} 
          >
            {option.label}
          </label>
        </article>
      ))}
    </>
  );
}

export default SortByCollapsibleItem;