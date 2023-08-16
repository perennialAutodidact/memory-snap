import React from "react";
import PropTypes from "prop-types";

const Tile = (props) => {
  const { img } = props;
  return (
    <div>
      <img src={img.src} alt={img.altText} />
    </div>
  );
};

Tile.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.string,
    altText: PropTypes.string,
  }),
};

export default Tile;
