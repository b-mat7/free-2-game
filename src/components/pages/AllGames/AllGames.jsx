import { useContext, useEffect, useState } from 'react';

import { PlatformContext } from '../../../contexts/PlatformContext';
import { getGamesByFilter } from '../../../assets/utilities/api/api';

import PlatformCollapsible from '../../shared/PlatformCollapsible/PlatformCollapsible';
import ListItem from '../../shared/ListItem/ListItem';

import gamesGridStyles from '../../../modules/GamesGrid.module.scss'
import styles from './AllGames.module.scss'


const AllGames = () => {

  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState("");

  const {platform, setPlatfom} = useContext(PlatformContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    setFilter(`games?platform=${platform}`)
  }, [platform])

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
        <button>Genre</button>
        <button>Sort by</button>
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