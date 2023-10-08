import React from 'react';
import PropTypes from 'prop-types';
import Tile from '../Tile';
import { flipTile } from 'contexts/game/actions';
import useGameContext from 'hooks/useGameContext';
import './style.scss';

const TileGrid = ({ tiles }) => {
  const { dispatch } = useGameContext();

  const onFlipTile = (tile) => {
    dispatch(flipTile(tile));
  };

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
  tiles: PropTypes.arrayOf(PropTypes.object),
};

export default TileGrid;
