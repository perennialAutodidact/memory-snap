import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tile from '../Tile';
import { addTiles, flipTile, resetTiles } from 'contexts/game/actions';
import useGameContext from 'hooks/useGameContext';
import './style.scss';

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
    if (state.flipped.length > 1) {
      if (state.flipped[0].photo.id === state.flipped[1].photo.id) {
        //dispatch handle match
      } else {
        setTimeout(() => {
          dispatch(resetTiles(state.flipped));
        }, 3000);
      }
    }
  }, [state.flipped]);

  return (
    <div id="tile-grid" className="container">
      <div className="row justify-content-center gap-0">
        {!tiles
          ? null
          : tiles.map((tile, index) => (
              <div className="col-3 col-sm-2 g-1" key={index}>
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
  );
};
TileGrid.propTypes = {
  toggleUp: PropTypes.func,
  // tiles: PropTypes.arrayOf(PropTypes.object),
  photos: PropTypes.arrayOf(PropTypes.object),
};

export default TileGrid;
