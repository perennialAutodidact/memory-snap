import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Tile from '../Tile';

const TileGrid = ({ tiles }) => {
  return (
    <div id="grid" className="tile_grid d-flex align-items-center flex-wrap">
      {!tiles
        ? null
        : tiles.map((tile, index) => (
            <Tile
              id={tile.id}
              key={index}
              src={tile.src.small}
              altText={tile.alt}
              size={tile.height}
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
