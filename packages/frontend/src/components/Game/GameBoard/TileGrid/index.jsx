import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tile from '../Tile';
import { flipTile, handleMatch, resetTiles } from 'contexts/game/actions';
import useGameContext from 'hooks/useGameContext';

const TileGrid = ({ tiles }) => {
  const { state, dispatch } = useGameContext();

  const onFlipTile = (tile) => {
    dispatch(flipTile(tile));
  };

  useEffect(() => {
    if (state.flipped.length > 1) {
      const timeout = setTimeout(() => {
        if (state.flipped[0].photo.id === state.flipped[1].photo.id) {
          dispatch(handleMatch(state.flipped));
        } else {
          dispatch(resetTiles(state.flipped));
        }
      }, 2000);

      return () => {
        if (timeout) {
          clearTimeout(timeout);
        }
      };
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
                    <Tile tile={tile} onFlip={onFlipTile} key={index} />
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
