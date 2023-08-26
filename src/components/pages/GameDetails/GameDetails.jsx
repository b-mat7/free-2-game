import { useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailItem from '../../shared/DetailItem/DetailItem';
import {dataDetailItem as gameDetails} from '../../../assets/utilities/data/data.js';

import styles from './GameDetails.module.scss'


const GameDetails = () => {
  const [game, setGame] = useState(gameDetails);

  const gameID = useParams().id;

  //fetch() details + (setGame(data)) via gameID
  
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