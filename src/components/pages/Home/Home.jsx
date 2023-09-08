import { useEffect, useState } from 'react'

import { getGamesByFilter } from '../../../assets/utilities/api/api';

import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';
import Button from '../../shared/Button/Button';
import ListItem from '../../shared/ListItem/ListItem';

import gamesGridStyles from '../../../modules/GamesGrid.module.scss'
import styles from './Home.module.scss'

const Home = () => {
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

  if (isLoading) {
    return <LoadingSpinner />
  }

  const currentMonth = new Date().toLocaleString("en-US", { month: "long", year: "2-digit" });

  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <h1>Find & track the best free-to-play games</h1>
      </div>
      {topPcGames &&
        <section className={styles.ranking}>
          <div className={styles.header}>
            <h2>Top PC-Games {currentMonth}</h2>
            <Button
              title={"Show More"}
              path={"/allgames"}
              platformByButton={"pc"}
              sortByByButton={"popularity"}
            />
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
      }
      {topBrowserGames &&
        <section className={styles.ranking}>
          <div className={styles.header}>
            <h2>Top Browser-Games {currentMonth}</h2>
            <Button
              title={"Show More"}
              path={"/allgames"}
              platformByButton={"browser"}
              sortByByButton={"popularity"}
            />
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
      }
      {topRecentlyAdded &&
        <section className={styles.ranking}>
          <div className={styles.header}>
            <h2>Recently Published</h2>
            <Button
              title={"Show More"}
              path={"/allgames"}
              platformByButton={"all"}
              sortByByButton={"release-date"}
            />
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
      }
    </section>
  );
}

export default Home;