import React, { useEffect } from "react";
import Tile from "../Tile";
import { flipTile, handleFlippedPair } from "@/contexts/GameContext/actions";
import { useGameContext } from "@/hooks/useGameContext";
import proptypes from "@/proptypes";

const TileGrid = ({ tiles }) => {
  const { state, dispatch } = useGameContext();

  const onFlipTile = (tile) => {
    dispatch(flipTile(tile));
  };

  useEffect(() => {
    if (state.flipped.length > 1) {
      setTimeout(() => {
        dispatch(handleFlippedPair(state.flipped));
      }, 2000);
    }
  }, [state.flipped, dispatch]);

  return (
    <div data-testid="tile-grid" className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-10 col-md-12 offset-md-0 offset-lg-1">
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {tiles.map((tile, index) => (
              <div className="tile" key={index}>
                <Tile tile={tile} onFlip={onFlipTile} key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

TileGrid.propTypes = proptypes.Game.TileGrid;

export default TileGrid;
