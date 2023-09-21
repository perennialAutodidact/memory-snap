import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Tile = ({ id, src }) => {
  const [faceUp, setFaceUp] = useState(false);

  const onFlip = () => {
    setFaceUp(!faceUp);
  };

  return (
    <div
      className={!faceUp ? 'tile bg-dark border border-primary' : 'tile'}
      onClick={onFlip}
      data-testid={`tile-${id}`}
    >
      {!faceUp ? null : (
        <img src={src} className="oversize" alt="Responsive image" />
      )}
    </div>
  );
};

Tile.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.number,
};

export default Tile;
