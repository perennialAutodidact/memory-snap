import React, { useEffect } from 'react';
import './styles/App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { routes, GAME_STAGES } from './utils';
import useGameContext from 'hooks/useGameContext';
import useFormContext from 'hooks/useFormContext';

const App = () => {
  const navigate = useNavigate();
  const {
    state: { stage },
  } = useGameContext();

  const {
    state: { currentStep },
  } = useFormContext();

  useEffect(() => {
    const { path } = routes[stage];

    let pathStep = routes[stage].children
      ? path.concat(routes[stage].children[currentStep - 1].path)
      : '';

    navigate(stage === GAME_STAGES.SETUP ? pathStep : path);
  }, [stage]);

  return (
    <div className="App bg-dark text-light vh-100 container-fluid p-0">
      <Routes>
        {routes.map((route, index) => (
          <Route
            path={route.path}
            element={<route.Element parent={route} index={index} key={index} />}
            key={index}
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
