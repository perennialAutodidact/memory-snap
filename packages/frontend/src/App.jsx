import React, { useEffect } from 'react';
// import { BreakpointContext } from 'contexts/breakpoint';
import { useLocation } from 'react-router-dom';
import './styles/App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { routes } from './utils';
import useGameContext from 'hooks/useGameContext';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const { height, width, isPortrait, isLandscape } =
  //   useContext(BreakpointContext);
  // console.log(height, width, isPortrait, isLandscape);
  const {
    state: { stage },
  } = useGameContext();

  useEffect(() => {
    const { path } = routes[stage];
    if (location.pathname.split('/')[1] !== path.split('/')[1]) {
      navigate(path);
    }
  }, [stage, navigate, location.pathname]);

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
