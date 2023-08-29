import styles from './PlatformCollabsibleItem.module.scss'

const PlatformCollabsibleItem = ({option}) => {
  return (
    <article className={styles.collabsible_item}>
      <p>{option.label}</p>
    </article>
  );
}

export default PlatformCollabsibleItem;