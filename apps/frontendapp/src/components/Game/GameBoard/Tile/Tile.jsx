import React from "react";
import { useGameContext } from "@/hooks/useGameContext";
import "./style.scss";
import proptypes from "@/proptypes";

const Tile = ({ tile, onFlip }) => {
  const { state } = useGameContext();

  const onClickTile = () => {
    onFlip(tile);
  };

  const tileClasses = [
    tile.faceUp ? "faceUp" : "faceDown tile border",
    `border-${state.currentPlayer.color.className}`,
    tile.isMatched ? "matched" : null,
  ].join(" ");

  const imageClasses = `${tile.faceUp ? "" : "visually-hidden"}`;
  return (
    <div
      className={tileClasses}
      onClick={onClickTile}
      data-testid={`tile-${tile.id}`}
      aria-hidden={!tile.faceUp}
    >
      <img
        className={imageClasses}
        src={tile.photo.src.small}
        alt={tile.photo.alt}
      />
    </div>
  );
};

Tile.propTypes = proptypes.Game.Tile;

export default Tile;
