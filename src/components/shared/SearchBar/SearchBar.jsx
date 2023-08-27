import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './SearchBar.module.scss'

// responsive mobile: padding weg, nur Logo

const SearchBar = () => {


  const location = useLocation().pathname;

  // useEffect(() => {
  //   setSearchInput("");
  // }, [location]);

  return (
    <section className={styles.searchbar}>
      <Link to={"/"}>
      <div className={styles.logo}>
        {/* <img src={} alt="logo"/> */}
        <span>Free2Game</span>
      </div>
      </Link>
      <div className={styles.search}>
        <input type="text" name="search_input" id="search_input" />
      </div>
    </section>
  );
}

export default SearchBar;