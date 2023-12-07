import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Tile = ({ tile, onFlip, player }) => {
  const onClickTile = () => {
    onFlip(tile);
  };

  const tileClasses = [
    tile.faceUp ? 'faceUp' : 'faceDown tile border',
    player.number === 1 ? 'border-primary' : 'border-secondary',
    tile.isMatched ? 'matched' : null,
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
  onFlip: PropTypes.func,
  player: PropTypes.object,
};

export default Tile;
