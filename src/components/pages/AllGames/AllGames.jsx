import { useState } from 'react';

import { dataListItems } from '../../../assets/utilities/data/data';

import ListItem from '../../shared/ListItem/ListItem';

import gamesGridStyles from '../../../modules/GamesGrid.module.scss'
import styles from './AllGames.module.scss'

const AllGames = () => {

  const [games, setGames] = useState(dataListItems);

  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <section className={styles.allgames}>
      <div className={styles.hero}>
        <h1>All games</h1>
      </div>
      <div className={styles.controls}>

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