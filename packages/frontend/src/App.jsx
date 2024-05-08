import React, { useEffect } from 'react';
import './styles/App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { routes } from './utils';
import useGameContext from 'hooks/useGameContext';
import useFormContext from 'hooks/useFormContext';

const App = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  const {
    state: { stage },
  } = useGameContext();

  const {
    state: { currentStep, formValues },
  } = useFormContext();

  useEffect(() => {
    const { path } = routes[stage];
    let pathEdit = path.slice(0, path.length - 1);
    // let pathStep = routes[stage].children
    //   ? pathEdit.concat(routes[stage].children[currentStep - 1].path)
    //   : '';

    // navigate(path);
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
