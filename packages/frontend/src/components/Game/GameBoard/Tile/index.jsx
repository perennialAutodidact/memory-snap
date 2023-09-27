import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Tile = ({ photo, onFlip, index, faceUp, id }) => {
  const onClickTile = () => {
    onFlip({ photo, onFlip, index, id });
  };

  const downClasses = 'tile faceDown bg-dark border border-primary';
  const upClasses = 'tile faceUp';
  return (
    <div
      className={!faceUp ? downClasses : upClasses}
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
