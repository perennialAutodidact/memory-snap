import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import useGameContext from 'hooks/useGameContext';

const Tile = ({ tile, onFlip }) => {
  const onClickTile = () => {
    onFlip(tile);
  };

  const { state } = useGameContext();

  const tileClasses = [
    tile.faceUp ? 'faceUp' : 'faceDown tile border border-primary',
    tile.isMatched ? 'matched' : null,
  ].join(' ');

  return (
    <div
      className={tileClasses}
      onClick={tile.faceUp || state.flipped.length > 1 ? null : onClickTile}
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
};

export default Tile;
