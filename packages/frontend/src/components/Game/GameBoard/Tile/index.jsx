import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Tile = ({ photo, onFlip, index, faceUp, id }) => {
  const onClickTile = () => {
    onFlip({ photo, onFlip, index, id });
  };

  return (
    <div
      className={
        !faceUp ? 'tile faceDown bg-dark border border-primary' : 'tile faceUp'
      }
      onClick={onClickTile}
      data-testid={`tile-${id}`}
    >
      {!faceUp ? null : (
        <img
          src={photo.src.small}
          className="oversize"
          alt={photo.alt}
        />
      )}
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
