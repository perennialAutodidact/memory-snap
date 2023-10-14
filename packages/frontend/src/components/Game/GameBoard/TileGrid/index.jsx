import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tile from '../Tile';
import { addTiles, flipTile, resetTiles } from 'contexts/game/actions';
import useGameContext from 'hooks/useGameContext';

const TileGrid = ({ photos }) => {
  const { dispatch, state } = useGameContext();

  useEffect(() => {
    if (photos) {
      dispatch(addTiles(photos));
    }
  }, [photos]);

  const tiles = state.tiles;
  const onFlipTile = (tile) => {
    dispatch(flipTile(tile));
  };

  useEffect(() => {
    console.log(state.flipped, 'USE');
    if (state.flipped.length > 1) {
      setTimeout(() => {
        dispatch(resetTiles(state.flipped));
      }, 2000);
    }
  }, [state.flipped]);

  return (
    <div id="tile-grid" className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-10 col-md-12 offset-md-0 offset-lg-1">
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {!tiles
              ? null
              : tiles.map((tile, index) => (
                  <div className="tile" key={index}>
                    <Tile
                      isMatched={tile.isMatched}
                      faceUp={tile.faceUp}
                      onFlip={onFlipTile}
                      key={index}
                      index={index}
                      id={tile.id}
                      photo={tile.photo}
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};
TileGrid.propTypes = {
  toggleUp: PropTypes.func,
  // tiles: PropTypes.arrayOf(PropTypes.object),
  photos: PropTypes.arrayOf(PropTypes.object),
};

export default TileGrid;
