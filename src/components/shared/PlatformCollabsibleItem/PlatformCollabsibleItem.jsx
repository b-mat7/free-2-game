import { useContext } from 'react';
import { PlatformContext } from '../../../contexts/PlatformContext';

import styles from './PlatformCollabsibleItem.module.scss'

const PlatformCollabsibleItem = ({ options }) => {

  const { platform, setPlatform } = useContext(PlatformContext);

  return (
    <>
      {options.map((option) => (
        <article className={styles.collabsible_item} key={option.value}>
          <input
            className={styles.inputs}
            type="checkbox"
            name={option.value}
            id={option.value}
            onChange={(event) => setPlatform(event.target.value)}
            value={option.value}
            checked={platform === option.value}
          />
          <label
            className={styles.labels}
            htmlFor={option.value}
            value={option.value} >
            {option.value}
          </label>
        </article>
      ))}
    </>
  );
}

export default PlatformCollabsibleItem;