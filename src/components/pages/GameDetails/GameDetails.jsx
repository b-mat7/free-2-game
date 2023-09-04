import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getSingleGameDetailsByFilter } from '../../../assets/utilities/api/api';

import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';
import DetailItem from '../../shared/DetailItem/DetailItem';

const GameDetails = () => {
  const [game, setGame] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const gameId = useParams().id;

  useEffect(() => {
    getSingleGameDetailsByFilter(`game?id=${gameId}`)
      .then((gameData) => {
        setGame(gameData);
        setIsLoading(false);
      })
  }, [gameId])

  if (isLoading) {
    return <LoadingSpinner />
  }

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