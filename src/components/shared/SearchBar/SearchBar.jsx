import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getGamesByFilter } from '../../../assets/utilities/api/api';

import SearchItem from '../SearchItem/SearchItem';
import logo from '../../../assets/images/icon_logo1.svg'

import styles from './SearchBar.module.scss'

const SearchBar = () => {
  const [games, setGames] = useState([]);
  const [gamesFound, setGamesFound] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const location = useLocation().pathname;

  useEffect(() => {
    setSearchInput("")
    // setGames([])
    // setGamesFound([])
  }, [location]);

  useEffect(() => {
    getGamesByFilter("games")
      .then((gamesData) => {
        setGames(gamesData)
        const result = [...games].filter((game) => {
          return game.title.toLowerCase().includes(searchInput.toLowerCase());
        });
        setGamesFound(result)
      });
  }, [searchInput]);

  return (
    <section className={styles.searchbar}>
      <Link to={"/"}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <span>Free2Game</span>
        </div>
      </Link>
      <div className={styles.search}>
        <input
          type="text"
          name="search_input"
          id="search_input"
          className={styles.search_input}
          onChange={(event) => setSearchInput(event.target.value)}
          value={searchInput} 
        />
        <div className={styles.search_output}>
          {gamesFound.map((game) => (
            <SearchItem
              key={game.id}
              game={game}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchBar;