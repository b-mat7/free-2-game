import { useState } from 'react';

import GenreCollapsibleItem from '../GenreCollapsibleItem/GenreCollapsibleItem';

import styles from './GenreCollapsible.module.scss'

const GenreCollapsible = () => {

  const [isCollapsed, setIsCollapsed] = useState(true);

  const text =
  "mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3D, 2D, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts";
  const genreArrayFromText = text.split(", ").sort();
  const genreOptions = genreArrayFromText.map((genre) => {
    return {
      label: genre.charAt(0).toLocaleUpperCase() + genre.slice(1),
      value: genre
    }
  });

  const handleClick = () => {
    setIsCollapsed((prev) => !prev)
  };

  return (
    <article className={styles.collapsible} onClick={() => handleClick()}>
      <div className={styles.name}>
        <p>GENRE</p>
        <p className={isCollapsed ? "" : styles.icon}>V</p>
      </div>
      <div className={styles.collapsible_items}>
        {!isCollapsed &&
          <GenreCollapsibleItem
            options={genreOptions}
          />
        }
      </div>

    </article>
  );
}

export default GenreCollapsible;