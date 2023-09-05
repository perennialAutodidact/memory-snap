import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Tile = ({ id }) => {
  const [faceUp, setFaceUp] = useState(false);

  const onClickTile = () => {
    setFaceUp(!faceUp);
    console.log('id from tile', id);
  };

  return (
    <>
      {!faceUp ? (
        <div className="tile bg-primary" onClick={onClickTile}>
          <h1>back</h1>
        </div>
      ) : (
        <div className="tile" onClick={onClickTile}>
          <h1>front</h1>
        </div>
      )}
    </>
  );
};

Tile.propTypes = {
  id: PropTypes.number,
};

export default Tile;
