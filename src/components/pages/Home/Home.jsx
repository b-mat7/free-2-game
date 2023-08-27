import { useEffect, useState } from 'react'

import { getGamesByFilter } from '../../../assets/utilities/api/api';

import ListItem from '../../shared/ListItem/ListItem';

import gamesGridStyles from '../../../modules/GamesGrid.module.scss'
import styles from './Home.module.scss'

const Home = () => {
  const [topRecentlyAdded, setTopRecentlyAdded] = useState([]);
  const [topPcGames, setTopPcGames] = useState([]);
  const [topBrowserGames, setTopBrowserGames] = useState([]);

  useEffect(() => {
    Promise.all([
      getGamesByFilter("games?sort-by=release-date"),
      getGamesByFilter("games?platform=pc"),
      getGamesByFilter("games?platform=browser")
    ])
      .then((gamesDataArray) => {
        setTopRecentlyAdded(gamesDataArray[0].slice(0, 4))
        setTopPcGames(gamesDataArray[1].slice(0, 4))
        setTopBrowserGames(gamesDataArray[2].slice(0, 4))
      })
  }, [])

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
          {topPcGames.map((game) => (
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
          {topBrowserGames.map((game) => (
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