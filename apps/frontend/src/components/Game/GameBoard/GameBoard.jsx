import { useGameContext } from '@/hooks/useGameContext';
import ScoreBoard from '@/components/Game/ScoreBoard';
import TileGrid from './TileGrid';

const GameBoard = () => {
  const {
    gameState: { players, currentPlayer, tiles },
  } = useGameContext();

  return (
    <>
      <ScoreBoard players={players} currentPlayer={currentPlayer} />
      <TileGrid tiles={tiles} />
    </>
  );
};

export default GameBoard;
