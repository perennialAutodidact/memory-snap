import React from 'react';
import PropTypes from 'prop-types';
import Tile from '../Tile';
import { flipTile } from 'contexts/game/actions';
import useGameContext from 'hooks/useGameContext';

const TileGrid = ({ tiles }) => {
  const { dispatch } = useGameContext();

  const onFlipTile = (tile) => {
    dispatch(flipTile(tile));
  };

  return (
    <div
      id="tile-grid"
      className="d-flex align-items-center flex-wrap justify-content-center gap-3"
    >
      {!tiles
        ? null
        : tiles.map((tile, index) => (
            <Tile
              isMatched={tile.isMatched}
              faceUp={tile.faceUp}
              onFlip={onFlipTile}
              key={index}
              index={index}
              id={tile.id}
              photo={tile.photo}
            />
          ))}
    </div>
  );
};
TileGrid.propTypes = {
  toggleUp: PropTypes.func,
  tiles: PropTypes.arrayOf(PropTypes.object),
};

export default TileGrid;
