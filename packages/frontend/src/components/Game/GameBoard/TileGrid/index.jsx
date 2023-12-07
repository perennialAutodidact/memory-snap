import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tile from '../Tile';
import {
  flipTile,
  handleMatch,
  resetTiles,
  advanceTurn,
} from 'contexts/game/actions';
import useGameContext from 'hooks/useGameContext';

const TileGrid = ({ tiles }) => {
  const { state, dispatch } = useGameContext();

  const onFlipTile = (tile) => {
    dispatch(flipTile(tile));
  };

  useEffect(() => {
    const handleFlippedPair = (flipped) => {
      setTimeout(() => {
        if (flipped[0].photo.id === flipped[1].photo.id) {
          dispatch(handleMatch(flipped));
        } else {
          dispatch(resetTiles(flipped));
        }
      }, 2000);
    };

    if (state.flipped.length > 1) {
      handleFlippedPair(state.flipped);
      setTimeout(() => {
        dispatch(advanceTurn());
      }, 2000);
    }
  }, [state.flipped, dispatch]);

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
                      tile={tile}
                      onFlip={onFlipTile}
                      player={state.currentPlayer}
                      key={index}
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
  tiles: PropTypes.arrayOf(PropTypes.object),
};

export default TileGrid;
