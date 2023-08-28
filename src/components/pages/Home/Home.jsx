import { useEffect, useState } from 'react'

import { getGamesByFilter, getGamesDetailsbyFilter } from '../../../assets/utilities/api/api';
// import { dataListItems } from '../../../assets/utilities/data/data';

import ListItem from '../../shared/ListItem/ListItem';

import gamesGridStyles from '../../../modules/GamesGrid.module.scss'
import styles from './Home.module.scss'

const Home = () => {
  // const [topRecentlyAdded, setTopRecentlyAdded] = useState(dataListItems);
  const [topPcGames, setTopPcGames] = useState([]);
  const [topBrowserGames, setTopBrowserGames] = useState([]);
  const [topRecentlyAdded, setTopRecentlyAdded] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      getGamesByFilter("games?platform=pc"),
      getGamesByFilter("games?platform=browser"),
      getGamesByFilter("games?sort-by=release-date")
    ])
      .then((gamesDataArray) => {
        setTopPcGames(gamesDataArray[0].slice(0, 4));
        setTopBrowserGames(gamesDataArray[1].slice(0, 4));
        setTopRecentlyAdded(gamesDataArray[2].slice(0, 4));
        setIsLoading(false);
      })
  }, [])

  // useEffect(() => {
  //   setIsLoading(true);
  //   Promise.all([
  //     getGamesDetailsbyFilter("games?sort-by=release-date"),
  //     getGamesDetailsbyFilter("games?platform=pc"),
  //     getGamesDetailsbyFilter("games?platform=browser")
  //   ])
  //     .then((gamesDataArray) => {
  //       console.log(gamesDataArray)
  //       setTopRecentlyAdded(gamesDataArray[0].slice(0, 4));
  //       setTopPcGames(gamesDataArray[1].slice(0, 4));
  //       setTopBrowserGames(gamesDataArray[2].slice(0, 4));
  //       setIsLoading(false);
  //     })
  // }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  const currentMonth = new Date().toLocaleString("en-US", { month: "long", year: "numeric" });

  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <h1>Find & track the best free-to-play games</h1>
      </div>
      <section className={styles.ranking}>
        <div className={styles.header}>
          <h2>Top PC-Games {currentMonth}</h2>
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
          <h2>Top Browser-Games {currentMonth}</h2>
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
    </section>
  );
}

export default Home;