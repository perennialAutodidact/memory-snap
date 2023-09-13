import PropTypes from 'prop-types';

export const Player = PropTypes.shape({
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
});
