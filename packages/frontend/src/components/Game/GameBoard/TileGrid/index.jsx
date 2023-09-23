import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Tile from '../Tile';
import { flipTile } from 'contexts/game/actions';
import useGameContext from 'hooks/useGameContext';

const TileGrid = ({ tiles }) => {
  const { state, dispatch } = useGameContext();

  const onFlipTile = (index) => {
    console.log(state, 'STATE');
    console.log(index, 'INDEX OF THE TILE TO FLIP');

    // const tileToToggle = state.tiles[index];

    // if (tileToToggle.faceUp === false) {
    //   tileToToggle.faceUp = true;
    // } else {
    //   tileToToggle.faceUp = false;
    // }

    dispatch(flipTile(index));
  };

  return (
    <div
      id="grid"
      className="tile_grid d-flex align-items-center flex-wrap justify-content-center gap-3"
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
