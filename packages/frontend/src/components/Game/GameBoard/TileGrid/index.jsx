import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Tile from '../Tile';
import { flipTile, handleFlippedPair } from 'contexts/game/actions';
import useGameContext from 'hooks/useGameContext';
import { BreakpointContext } from 'contexts/breakpoint';

const TileGrid = ({ tiles }) => {
  const { state, dispatch } = useGameContext();

  const { breakpoint } = useContext(BreakpointContext);
  const onFlipTile = tile => {
    dispatch(flipTile(tile));
  };

  useEffect(() => {
    if (state.flipped.length > 1) {
      setTimeout(() => {
        dispatch(handleFlippedPair(state.flipped));
      }, 2000);
    }
  }, [state.flipped, dispatch]);

  return (
    <div
      data-testid="tile-grid"
      className={`container${
        breakpoint === 'xxl' ? '' : '-fluid'
      } bg-dark mt-5 pb-5`}
    >
      <div className="row">
        <div className="col-12 ">
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
