import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Tile = ({ id, src, alt, size }) => {
  const [faceUp, setFaceUp] = useState(false);
  console.log('id from tile', id, src, alt, size);

  const onFlip = () => {
    setFaceUp(!faceUp);
  };

  return (
    <div
      className={!faceUp ? 'tile bg-primary' : 'tile'}
      onClick={onFlip}
      data-testid={'tileTest'}
    >
      {!faceUp ? (
        <h1>back</h1>
      ) : (
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
