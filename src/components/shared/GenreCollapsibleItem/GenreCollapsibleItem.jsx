import { useContext } from 'react';
import { GenreContext } from '../../../contexts/GenreContext';

import styles from './GenreCollapsibleItem.module.scss'

const GenreCollapsibleItem = ({ options }) => {

  const { genre, setGenre } = useContext(GenreContext);

  const handleClick = (event) => {
    const clickedGenre = event.target.value;
    const currentGenres = [...genre];
    const clickedGenreInCurrentGenres = currentGenres.includes(clickedGenre);
    const clickedGenreIndex = currentGenres.indexOf(clickedGenre);

    if(clickedGenreInCurrentGenres) {
      setGenre(currentGenres.splice(clickedGenreIndex, 1))
    } else {
      setGenre([...currentGenres, clickedGenre])
    }
  }

  return (
    <>
      {options.map((option) => (
        <article className={styles.collapsible_item} key={option.value}>
          <input
            type="checkbox"
            name={option.value}
            id={option.value}
            onChange={(event) => handleClick(event)}
            value={option.value}
            checked={genre.includes(option.value)}
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