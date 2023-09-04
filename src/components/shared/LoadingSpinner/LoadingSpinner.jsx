import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.pacman}></div>
      <p className={styles.info}>Loading data...</p>
    </div>
  );
}

export default LoadingSpinner;