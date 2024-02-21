import React, { useEffect } from 'react';
import './styles/App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { routes } from './utils';
import useGameContext from 'hooks/useGameContext';

const App = () => {
  const navigate = useNavigate();
  const {
    state: { stage },
  } = useGameContext();

  useEffect(() => {
    const { path } = routes[stage];
    navigate(path);
  }, [stage]);

  return (
    <div className="App bg-dark text-light vh-100 container-fluid p-0">
      <Routes>
        {Object.keys(routes).map((key) => (
          <Route
            key={key}
            path={routes[key].path}
            element={routes[key].component}
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
