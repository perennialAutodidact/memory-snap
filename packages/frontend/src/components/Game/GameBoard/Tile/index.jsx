import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Tile = ({ photo, onFlip, index }) => {
  const [faceUp, setFaceUp] = useState(false);

  const onClickTile = () => {
    setFaceUp(!faceUp);

    onFlip({ photo, onFlip, index });
  };

  return (
    <div
      className={!faceUp ? 'tile bg-dark border border-primary' : 'tile'}
      onClick={onClickTile}
      data-testid={`tile-${photo.id}`}
    >
      {!faceUp ? null : (
        <img
          src={photo.src.small}
          className="oversize"
          alt="Responsive image"
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
};

export default Tile;
