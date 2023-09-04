import React from 'react';
// import Tile from '../Tile';

const tiles = {
  rows: {
    0: {
      columns: {
        0: {
          faceUp: false,
          matched: false,
        },
        1: {
          faceUp: false,
          matched: false,
        },
        2: {
          faceUp: false,
          matched: false,
        },
        3: {
          faceUp: false,
          matched: false,
        },
      },
    },
    1: {
      columns: {
        0: {
          faceUp: false,
          matched: false,
        },
        1: {
          faceUp: false,
          matched: false,
        },
        2: {
          faceUp: false,
          matched: false,
        },
        3: {
          faceUp: false,
          matched: false,
        },
      },
    },
    2: {
      columns: {
        0: {
          faceUp: false,
          matched: false,
        },
        1: {
          faceUp: false,
          matched: false,
        },
        2: {
          faceUp: false,
          matched: false,
        },
        3: {
          faceUp: false,
          matched: false,
        },
      },
    },
    3: {
      columns: {
        0: {
          faceUp: false,
          matched: false,
        },
        1: {
          faceUp: false,
          matched: false,
        },
        2: {
          faceUp: false,
          matched: false,
        },
        3: {
          faceUp: false,
          matched: false,
        },
      },
    },
  },
};

const TileGrid = () => {
  const rows = tiles.rows;
  let rowNumber = Object.keys(rows).length;

  console.log(rowNumber);

  const grid = document.getElementById('grid');

  console.log('grid length', grid);

  return (
    <div id="grid" className="Tile_Grid bg-primary">
      fuhfh
    </div>
  );
};

export default TileGrid;
