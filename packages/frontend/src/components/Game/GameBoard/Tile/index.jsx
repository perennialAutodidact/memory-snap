import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Tile = ({ photo, onFlip, index, faceUp, id, isMatched }) => {
  const onClickTile = () => {
    onFlip({ photo, onFlip, index, id, faceUp, isMatched });
  };

  const tileClasses = [
    'tile border border-primary',
    faceUp ? 'faceUp' : 'faceDown',
  ].join(' ');

  return (
    <div
      className={tileClasses}
      onClick={onClickTile}
      data-testid={`tile-${id}`}
    >
      {!faceUp ? null : <img src={photo.src.small} alt={photo.alt} />}
    </div>
  );
};

Tile.propTypes = {
  photo: PropTypes.object,
  isMatched: PropTypes.bool,
  index: PropTypes.number,
  onFlip: PropTypes.func,
  faceUp: PropTypes.bool,
  id: PropTypes.number,
};

export default Tile;
