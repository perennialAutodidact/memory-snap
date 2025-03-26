import { useEffect } from 'react';
import Tile from '../Tile';
import { useGameContext } from '@/hooks/useGameContext';
import proptypes from '@/proptypes';

const TileGrid = ({ tiles }) => {
  const { gameDispatch, gameActions } = useGameContext();

  const onFlipTile = (tile) => {
    gameDispatch(gameActions.flipTile(tile));
  };

  useEffect(() => {
    if (tiles.flipped?.length > 1) {
      setTimeout(() => {
        gameDispatch(gameActions.handleFlippedPair(tiles.flipped));
      }, 2000);
    }
  }, [tiles, gameDispatch]);

  return (
    <div data-testid="tile-grid" className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-10 col-md-12 offset-md-0 offset-lg-1">
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {tiles.all.map((tile) => (
              <Tile tile={tile} onFlip={onFlipTile} key={tile.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

TileGrid.propTypes = proptypes.Game.TileGrid;

export default TileGrid;
