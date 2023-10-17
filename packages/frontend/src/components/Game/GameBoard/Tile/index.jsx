import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Tile = (tile) => {
  const onClickTile = () => {
    tile.onFlip(tile);
  };

  const tileClasses = [
    'tile border border-primary',
    tile.faceUp ? 'faceUp' : 'faceDown',
  ].join(' ');

  return (
    <div
      className={tileClasses}
      onClick={onClickTile}
      data-testid={`tile-${tile.id}`}
    >
      {!tile.faceUp ? null : (
        <img src={tile.photo.src.small} alt={tile.photo.alt} />
      )}
    </div>
  );
};

Tile.propTypes = {
  tile: PropTypes.object,
};

export default Tile;
