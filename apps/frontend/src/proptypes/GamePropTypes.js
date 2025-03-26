import PropTypes from 'prop-types';

const Player = PropTypes.shape({
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  color: PropTypes.shape({
    className: PropTypes.string,
  }),
});

const PlayerHUD = {
  player: Player,
  isActive: PropTypes.bool,
  name: PropTypes.string,
};

const ScoreBoard = {
  players: PropTypes.arrayOf(Player),
  currentPlayer: Player,
};

const Tile = PropTypes.shape({
  id: PropTypes.number.isRequired,
  isMatched: PropTypes.bool.isRequired,
  faceUp: PropTypes.bool.isRequired,
  isFlippable: PropTypes.bool.isRequired,
  photo: PropTypes.object.isRequired,
}).isRequired;

const TileGrid = {
  tiles: PropTypes.shape({
    all: PropTypes.arrayOf(Tile).isRequired,
    flipped: PropTypes.arrayOf(Tile).isRequired,
    matched: PropTypes.arrayOf(Tile).isRequired,
  }),
};

export { Player, PlayerHUD, ScoreBoard, Tile, TileGrid };
