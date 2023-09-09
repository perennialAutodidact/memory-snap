import React from 'react';
import PropTypes from 'prop-types';
import { mockPhotos } from 'components/__mocks__/mockPhotos';
import './style.scss';
import Tile from '../Tile';

const TileGrid = () => {
  const photosCopy = [...mockPhotos];
  const tiles = mockPhotos.concat(photosCopy);
  console.log('potoscopy', tiles);

  console.log(tiles, 'after');
  return (
    <div id="grid" className="tile_grid">
      {tiles.map((tile) => (
        <Tile
          id={tile.id}
          key={Math.random()}
          src={tile.url}
          altText={tile.alt}
          size={tile.height}
        />
      ))}
    </div>
  );
};

TileGrid.propTypes = {
  toggleUp: PropTypes.func,
};

export default TileGrid;
