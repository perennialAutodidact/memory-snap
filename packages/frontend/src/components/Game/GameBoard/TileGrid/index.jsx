import React from 'react';
import Tile from '../Tile';
import PropTypes from 'prop-types';
import './style.scss';

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
  let columnNumber = Object.keys(tiles.rows[0].columns).length;

  let gameRows = [];
  let columns = [];

  const flipCard = () => {
    console.log('card clicked');
  };

  //loop the length of columnNumber
  for (let i = 0; i < columnNumber; i++) {
    let column = <Tile id={i} onClick={flipCard} />;
    columns.push(column);
    console.log(columns);
  }

  //loop the length of rowNumber
  for (let i = 0; i < rowNumber; i++) {
    let row = (
      <div className="game_row" id={i}>
        {columns}
      </div>
    );
    console.log('looped');
    gameRows.push(row);
  }

  return (
    <div id="grid" className="tile_grid">
      {gameRows}
    </div>
  );
};

TileGrid.propTypes = {
  toggleUp: PropTypes.func,
};

export default TileGrid;
