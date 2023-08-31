import { useState } from 'react';

import SortByCollapsibleItem from '../SortByCollapsibleItem/SortByCollapsibleItem';

import styles from './SortByCollapsible.module.scss'

const SortByCollapsible = () => {

  const [isCollapsed, setIsCollapsed] = useState(true);

  const sortByOptions = [
    { label: "Relevance", value: "relevance" },
    { label: "Popularity", value: "popularity" },
    { label: "Release Date", value: "release-date" },
    { label: "Alphabetical", value: "alphabetical" }
  ];

  const handleClick = () => {
    setIsCollapsed(prev => !prev)
  };

  return (
    <section className={styles.collapsible} onClick={() => handleClick()}>
      <div className={styles.name}>
        <p>SORT BY</p>
        <p className={isCollapsed ? "" : styles.icon}>V</p>
      </div>
      <div className={styles.collapsible_items}>
        {!isCollapsed &&
          <SortByCollapsibleItem
            options={sortByOptions}
          />
        }
      </div>
    </section>
  );
}

export default SortByCollapsible;