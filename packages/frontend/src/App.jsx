import React, { useEffect } from 'react';
import './styles/App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { routesExp, routes, FORM_STEPS } from './utils';
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
        {routesExp.map((route) => {
          if (route.children === null) {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            );
          } else {
            return (
              <Route path={route.path} element={route.element} key={route.path}>
                {route.children.map((child) => (
                  <Route
                    path={child.path}
                    element={child.element}
                    key={route.path}
                  />
                ))}
              </Route>
            );
          }
        })}
      </Routes>
    </div>
  );
};

export default App;
