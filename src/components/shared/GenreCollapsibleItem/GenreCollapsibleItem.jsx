import { useContext } from 'react';
import { GenreContext } from '../../../contexts/GenreContext';

import styles from './GenreCollapsibleItem.module.scss'

const GenreCollapsibleItem = ({ options }) => {

  const { genre, setGenre } = useContext(GenreContext);

  return (
    <>
      {options.map((option) => (
        <article className={styles.collapsible_item} key={option.value}>
          <input
            type="checkbox"
            name={option.value}
            id={option.value}
            onChange={(event) => setGenre(event.target.value)}
            value={option.value}
            checked={genre === option.value}
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

export default GenreCollapsibleItem;