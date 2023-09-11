import React from 'react';
import PropTypes from 'prop-types';
import { mockPhotos } from 'components/__mocks__/mockPhotos';
import './style.scss';
import Tile from '../Tile';

const TileGrid = () => {
  const photosCopy = [...mockPhotos];
  const tiles = mockPhotos.concat(photosCopy);
  console.log('potoscopy', tiles);

  console.log(tiles[0].src.small, 'after');

  const shuffleTiles = () => {
    let currentIndex = tiles.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [tiles[currentIndex], tiles[randomIndex]] = [
        tiles[randomIndex],
        tiles[currentIndex],
      ];
    }
    return tiles;
  };

  shuffleTiles(tiles);

  return (
    <div id="grid" className="tile_grid d-flex align-items-center flex-wrap">
      {tiles.map((tile, index) => (
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
};

export default TileGrid;
