import styles from './DetailItem.module.scss'

const DetailItem = ({ game }) => {
  return (
    <article className={styles.details_item}>
      <div className={styles.hero}>
        <img src={game.screenshots[0].image}></img>
      </div>
      <h1>{game.title}</h1>
      <div className={styles.overview}>
        <div className={styles.about}>
          <img src={game.thumbnail}></img>
          <p>{`Platform: ${game.platform}`}</p>
          <p>{`Genre: ${game.genre}`}</p>
          <div>
            <button>Play Now</button>
            <button>Back</button>
          </div>
        </div>
        <div className={styles.description}>
          <p>{game.description}</p>
        </div>
      </div>
      {/* Abfrage ob beide screens da mit (p1 && p2) && <div> */}
      <div className={styles.screenshots}>
        <img src={game.screenshots[1].image}></img>
        <img src={game.screenshots[2].image}></img>
      </div>
      <div className={styles.addtl_info}>
        <div className={styles.developer}>
          <h3>Addtl. Information</h3>
          <p>{game.developer}</p>
          <p>{game.publisher}</p>
          <p>{game.release_date}</p>
        </div>
        {/* Abfrage ob platform !== Browser && <div> */}
        <div className={styles.system}>
          <h3>Minimum System Requirements</h3>
          <p>{game.minimum_system_requirements.os}</p>
          <p>{game.minimum_system_requirements.processor}</p>
          <p>{game.minimum_system_requirements.graphics}</p>
          <p>{game.minimum_system_requirements.memory}</p>
          <p>{game.minimum_system_requirements.storage}</p>
        </div>
      </div>
    </article>
  );
}

export default DetailItem;