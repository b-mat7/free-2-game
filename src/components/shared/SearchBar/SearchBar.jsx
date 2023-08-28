import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../../assets/images/icon_logo1.svg'
import styles from './SearchBar.module.scss'

const SearchBar = () => {

  const location = useLocation().pathname;

  // useEffect(() => {
  //   setSearchInput("");
  // }, [location]);

  return (
    <section className={styles.searchbar}>
      <Link to={"/"}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
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