import React, { useState } from 'react';

const Tile = () => {
  const [faceUp, setFaceUp] = useState(false);

  const onClickTile = () => {
    setFaceUp(!faceUp);
  };
  console.log(faceUp);
  return (
    <>
      {!faceUp ? (
        <div className="tile bg-primary" onClick={onClickTile}>
          <h1>back</h1>
        </div>
      ) : (
        <div className="tile" onClick={onClickTile}>
          <h1>front</h1>
        </div>
      )}
    </>
  );
};

export default Tile;
