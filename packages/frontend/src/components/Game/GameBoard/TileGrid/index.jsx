import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Tile from '../Tile';

const TileGrid = ({ tiles }) => {
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
              id={tile.photo.id}
              key={index}
              src={tile.photo.src.small}
              alt={tile.photo.alt}
              size={tile.photo.height}
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
