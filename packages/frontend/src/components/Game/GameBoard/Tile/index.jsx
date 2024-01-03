import React from 'react';
import PropTypes from 'prop-types';
import useGameContext from 'hooks/useGameContext';
import './style.scss';

const Tile = ({ tile, onFlip }) => {
  const { state } = useGameContext();

  const onClickTile = () => {
    onFlip(tile);
  };

  const tileClasses = [
    tile.faceUp ? 'faceUp' : 'faceDown tile border',
    `border-${state.currentPlayer.color.className}`,
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
};

export default Tile;
