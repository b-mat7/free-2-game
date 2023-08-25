
import { useState } from 'react'

import { dataListItems } from '../../../assets/utilities/data/data';

import ListItem from '../../shared/ListItem/ListItem';

import gamesGridStyles from '../../../modules/GamesGrid.module.scss'
import styles from './Home.module.scss'

const Home = () => {
  const [topRecentlyAdded, setTopRecentlyAdded] = useState(dataListItems);
  console.log(dataListItems)

  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <h1>Find & track the best...</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <section>
        <h3>Recently Added</h3>
        <div className={gamesGridStyles.list_wrapper}>
          {topRecentlyAdded.map((game) => (
            <ListItem
              key={game.id}
              game={game}
            />
          ))}
        </div>
        <button>Show More</button>
      </section>
    </section>
  );
}

export default Home;
