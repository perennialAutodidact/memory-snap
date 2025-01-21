import { useGameContext } from '@/hooks/useGameContext';
import './style.scss';
import proptypes from '@/proptypes';

const Tile = ({ tile, onFlip }) => {
  const {
    gameState: { currentPlayer },
  } = useGameContext();

  const onClickTile = () => {
    onFlip(tile);
  };

  const tileClasses = [
    'tile',
    tile.faceUp ? 'faceUp' : 'faceDown',
    tile.isMatched ? 'matched' : 'border',
    `border-${!tile.isMatched ? currentPlayer.color.className : '0'}`,
  ].join(' ');

  const imageClasses = `${tile.faceUp ? '' : 'visually-hidden'}`;
  return (
    <div
      className={tileClasses}
      onClick={onClickTile}
      data-testid={`tile-${tile.id}`}
    >
      <img
        className={imageClasses}
        src={tile.photo.src.small}
        alt={tile.photo.altText}
        aria-hidden={!tile.faceUp}
        hidden={!tile.faceUp}
      />
    </div>
  );
};

Tile.propTypes = proptypes.Game.Tile;

export default Tile;
