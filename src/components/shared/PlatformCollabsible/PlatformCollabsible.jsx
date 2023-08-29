import { useState } from 'react';
import PlatformCollabsibleItem from '../PlatformCollabsibleItem/PlatformCollabsibleItem';

import styles from './PlatformCollabsible.module.scss'

const PlatformCollabsible = () => {

  const [isCollapsed, setIsCollapsed] = useState(true);

  const platformOptions = [
    { label: "All Platform", value: "all" },
    { label: "Windows (PC)", value: "pc" },
    { label: "Browser (Web)", value: "browser" }
  ];

  const handleClick = () => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <section className={styles.collabsible} onClick={() => handleClick()}>
      <div className={styles.name}>
        <p>PLATFORM</p>
        <p className={isCollapsed ? "" : styles.icon}>ICON</p>
      </div>
      <div>
        {isCollapsed &&
          platformOptions.map((option, index) => (
            <PlatformCollabsibleItem
              key={index}
              option={option}
            />
          ))
        }
      </div>
    </section>
  );
}

export default PlatformCollabsible;