import { useState } from 'react';

import PlatformCollapsibleItem from '../PlatformCollapsibleItem/PlatformCollapsibleItem';

import styles from './PlatformCollapsible.module.scss'

const PlatformCollapsible = () => {

  const [isCollapsed, setIsCollapsed] = useState(true);

  const platformOptions = [
    { label: "All Platforms", value: "all" },
    { label: "Windows (PC)", value: "pc" },
    { label: "Browser (Web)", value: "browser" }
  ];

  const handleClick = () => {
    setIsCollapsed(prev => !prev)
  };

  return (
    <section className={styles.collapsible} onClick={() => handleClick()}>
      <div className={styles.name}>
        <p>PLATFORM</p>
        <p className={isCollapsed ? "" : styles.icon}>V</p>
      </div>
      <div className={styles.collapsible_items}>
        {!isCollapsed &&
          <PlatformCollapsibleItem
            options={platformOptions}
          />
        }
      </div>
    </section>
  );
}

export default PlatformCollapsible;