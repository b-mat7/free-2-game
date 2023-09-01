import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { PlatformContext } from '../../../contexts/PlatformContext';
import { GenreContext } from '../../../contexts/GenreContext';
import { SortByContext } from '../../../contexts/SortByContext';

import buttonStyles from '../../../modules/ButtonStyle.module.scss'

const Button = ({ title, path, platformByButton, sortByByButton }) => {

  const { platform, setPlatform } = useContext(PlatformContext);
  const { genre, setGenre } = useContext(GenreContext);
  const { sortBy, setSortBy } = useContext(SortByContext);

  const handleClick = () => {
    if (platformByButton && sortByByButton) {
      setPlatform(platformByButton);
      setSortBy(sortByByButton);
    } else {
      setPlatform(platform);
      setGenre(genre);
      setSortBy(sortBy);
    }
  }

  return (
    <Link to={`${path}`}>
      <button className={buttonStyles.button} onClick={() => handleClick()}>{title}</button>
    </Link>
  );
}

export default Button;