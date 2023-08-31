// import { dataListItems } from '../../../assets/utilities/data/data';

import { useContext, useEffect, useState } from 'react';

import { PlatformContext } from '../../../contexts/PlatformContext';
import { GenreContext } from '../../../contexts/GenreContext';
import { SortByContext } from '../../../contexts/SortByContext';
import { getGamesByFilter } from '../../../assets/utilities/api/api';

import PlatformCollapsible from '../../shared/PlatformCollapsible/PlatformCollapsible';
import SortByCollapsible from '../../shared/SortByCollapsible/SortByCollapsible';
import GenreCollapsible from '../../shared/GenreCollapsible/GenreCollapsible';
import ListItem from '../../shared/ListItem/ListItem';

import gamesGridStyles from '../../../modules/GamesGrid.module.scss';
import styles from './AllGames.module.scss';


const AllGames = () => {
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState("");

  const { platform, setPlatfom } = useContext(PlatformContext);
  const { genre, setGenre } = useContext(GenreContext);
  const { sortBy, setSortBy } = useContext(SortByContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(genre.length === 0) {
      setFilter(`games?platform=${platform}&sort-by=${sortBy}`);
    } else {
      const genreString = genre.join(".")
      setFilter(`filter?platform=${platform}&tag=${genreString}`);
    }
  }, [platform, genre, sortBy])

  useEffect(() => {
    if (filter !== "") {
      setIsLoading(true);
      getGamesByFilter(filter)
        .then((gamesData) => {
          setGames(gamesData);
          setIsLoading(false);
        })
    }
  }, [filter])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <section className={styles.allgames}>
      <div className={styles.hero}>
        <h1>All games</h1>
      </div>
      <div className={styles.controls}>
        <PlatformCollapsible />
        <GenreCollapsible />
        <SortByCollapsible />
      </div>
      <div className={gamesGridStyles.list_wrapper}>
        {games.map((game) => {
          return (
            <ListItem
              key={game.id}
              game={game}
            />
          )
        })}
      </div>
    </section>
  );
}

export default AllGames;