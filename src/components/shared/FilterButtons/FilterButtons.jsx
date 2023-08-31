import { useContext, useEffect, useState } from 'react';

import { GenreContext } from '../../../contexts/GenreContext';

import FilterButton from '../FIlterButton/FilterButton';

import styles from './FilterButtons.module.scss'

const FilterButtons = () => {
  const [allFilters, setAllFilters] = useState([]);

  const { genre, setGenre } = useContext(GenreContext);

  useEffect(() => {
    setAllFilters([...genre])
  }, [genre]);

  return (
    <section className={styles.filter_button_wrapper}>
      {allFilters.map((filter, index) => (
        <FilterButton
          key={index}
          filter={filter}
        />
      ))}
    </section>
  );
}

export default FilterButtons;