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
  tiles: PropTypes.arrayOf(PropTypes.object),
};

export default TileGrid;
