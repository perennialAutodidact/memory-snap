import React, { useEffect } from 'react';
import './styles/App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { routes, FORM_STEPS } from './utils';
import useGameContext from 'hooks/useGameContext';
import { GAME_STAGES } from 'utils/stages';

const App = () => {
  const navigate = useNavigate();
  const {
    state: { stage, step },
  } = useGameContext();
  useEffect(() => {
    const { path } = routes[stage];

    let pathStep = path.concat('/', FORM_STEPS[step].path);

    navigate(stage === GAME_STAGES.SETUP ? pathStep : path);
  }, [stage]);

  return (
    <div className="App bg-dark text-light vh-100 container-fluid p-0">
      <Routes>
        <Route path={routes.SETUP.path} element={routes.SETUP.component}>
          <Route
            path={FORM_STEPS.ONE.path}
            element={FORM_STEPS.ONE.component}
          />
          <Route
            path={FORM_STEPS.TWO.path}
            element={FORM_STEPS.TWO.component}
          />
          <Route
            path={FORM_STEPS.THREE.path}
            element={FORM_STEPS.THREE.component}
          />
          <Route
            path={FORM_STEPS.FOUR.path}
            element={FORM_STEPS.FOUR.component}
          />
        </Route>
        <Route path={routes.PLAYING.path} element={routes.PLAYING.component} />
        <Route
          path={routes.GAME_OVER.path}
          element={routes.GAME_OVER.component}
        />
      </Routes>
    </div>
  );
};

export default App;
