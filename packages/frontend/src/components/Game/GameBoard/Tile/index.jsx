import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Tile = ({ id, src, altText, size }) => {
  const [faceUp, setFaceUp] = useState(false);
  console.log('id from tile', id, src, altText, size);

  const onFlip = () => {
    setFaceUp(!faceUp);
  };

  return (
    <div className={!faceUp ? 'tile bg-primary' : 'tile'} onClick={onFlip}>
      {!faceUp ? <h1>back</h1> : <h1>front</h1>}
    </div>
  );
};

Tile.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  altText: PropTypes.string,
  size: PropTypes.number,
};

export default Tile;
