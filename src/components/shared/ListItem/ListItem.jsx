import { Link } from 'react-router-dom';

import iconWindows from '../../../assets/images/icon_Windows.svg'
import iconBrowser from '../../../assets/images/icon_Browser.svg'

import styles from './ListItem.module.scss'

const ListItem = ({ game }) => {
  const platformIcon = (
    <img src={game.platform === "Web Browser" ? iconBrowser : iconWindows}></img>);
  
    return (
    <article className={styles.list_item}>
      <div className={styles.hero}>
        <img src={game.thumbnail} alt="game-thumbnail" />
      </div>
      <div className={styles.content}>
        <h3>{game.title}</h3>
        <p>{game.short_description}</p>
      </div>
      <div className={styles.details}>
        <button>Show Details</button>
        <Link to={`/details/${game.id}`}>Show Details</Link>
      </div>
      <div className={styles.info}>
        <Link>{platformIcon}</Link>
        <Link>{game.genre}</Link>
      </div>
    </article>
  );
}

export default ListItem;