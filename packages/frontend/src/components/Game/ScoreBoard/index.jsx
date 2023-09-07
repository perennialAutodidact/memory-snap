import React from 'react';
import useGameContext from 'hooks/useGameContext';

const ScordBoard = () => {
  const {
    state: { players },
  } = useGameContext();
  return <div>{}</div>;
};

export default ScordBoard;
