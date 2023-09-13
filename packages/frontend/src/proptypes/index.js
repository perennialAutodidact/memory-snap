import PropTypes from 'prop-types';

export const Player = PropTypes.shape({
  name: PropTypes.string,
  number: PropTypes.number,
  score: PropTypes.number,
});
