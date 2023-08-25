
import { useState } from 'react'

import { dataListItems } from '../../../assets/utilities/data/data';

import ListItem from '../../shared/ListItem/ListItem';

import gamesGridStyles from '../../../modules/GamesGrid.module.scss'
import styles from './Home.module.scss'

const Home = () => {
  const [topRecentlyAdded, setTopRecentlyAdded] = useState(dataListItems.slice(0, 4));

  const currentMonth = new Date().toLocaleString("en-US", { month: "long", year: "numeric" });

  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <h1>Find & track the best...</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <section className={styles.ranking}>
        <div className={styles.header}>
          <h2>Recently Published</h2>
          <button>Show More</button>
        </div>
        <div className={gamesGridStyles.list_wrapper}>
          {topRecentlyAdded.map((game) => (
            <ListItem
              key={game.id}
              game={game}
            />
          ))}
        </div>
      </section>
      <section className={styles.ranking}>
        <div className={styles.header}>
          <h2>Top PC-Games in {currentMonth}</h2>
          <button>Show More</button>
        </div>
        <div className={gamesGridStyles.list_wrapper}>
          {topRecentlyAdded.map((game) => (
            <ListItem
              key={game.id}
              game={game}
            />
          ))}
        </div>
      </section>
      <section className={styles.ranking}>
        <div className={styles.header}>
          <h2>Top Browser-Games in {currentMonth}</h2>
          <button>Show More</button>
        </div>
        <div className={gamesGridStyles.list_wrapper}>
          {topRecentlyAdded.map((game) => (
            <ListItem
              key={game.id}
              game={game}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Home;
