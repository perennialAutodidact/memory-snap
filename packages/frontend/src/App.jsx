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
    //eslint-disable-next-line
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
