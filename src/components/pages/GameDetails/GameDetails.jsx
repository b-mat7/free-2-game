import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { dataDetailItem } from '../../../assets/utilities/data/data.js';
import { getSingleGameDetailsByFilter } from '../../../assets/utilities/api/api';

import DetailItem from '../../shared/DetailItem/DetailItem';

import styles from './GameDetails.module.scss'


const GameDetails = () => {
  const [game, setGame] = useState(dataDetailItem);
  // const [game, setGame] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const gameId = useParams().id;

  useEffect(() => {
    getSingleGameDetailsByFilter(`game?id=${gameId}`)
      .then((gameData) => {
        setGame(gameData);
        setIsLoading(false);
      })
  }, [])

  // if(isLoading) {
  //   return <p>Loading...</p>
  // }

  return (
    <section>
      <DetailItem
        key={game.id}
        game={game}
      />
    </section>
  );
}

export default GameDetails;