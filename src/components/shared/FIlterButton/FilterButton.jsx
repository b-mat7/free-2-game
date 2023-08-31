import { useContext } from 'react'

import { GenreContext } from '../../../contexts/GenreContext'

import image from '../../../assets/images/icon_close.svg'

import styles from './FilterButton.module.scss'

const FilterButton = ({ filter }) => {
  const { genre, setGenre } = useContext(GenreContext);
  console.log(filter)

  const handleClick = () => {
    const newGenres = [...genre].filter(genre => genre !== filter);
    setGenre(newGenres);
  }
  return (
    <p className={styles.filter_button}>
      <span onClick={() => handleClick()}>
        <img src={image} alt="close" />
      </span>
      {filter}
    </p>
  );
}

export default FilterButton;