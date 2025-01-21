import { useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import { routes } from '@/utils/routes';
import { GAME_STAGES } from '@/utils/stages';
import { useGameContext } from '@/hooks/useGameContext';
import '@/styles/App.scss';
import IndexElement from './components/Setup/FormStep/IndexElement';

const { GAME_OVER, SETUP, PLAYING } = GAME_STAGES;

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    gameActions,
    gameDispatch,
    gameState: { currentStage },
  } = useGameContext();

  // navigate to the proper path based on the current game stage
  useEffect(() => {
    let path = '/';
    switch (currentStage) {
      case SETUP: {
        path = '/setup';
        break;
      }
      case PLAYING: {
        path = '/play';
        break;
      }
      case GAME_OVER: {
        path = '/game-over';
        gameDispatch(gameActions.handleGameOver());
        break;
      }
    }
    if (!location.pathname.startsWith(path)) {
      navigate(path);
    }
  }, [currentStage, navigate]);

  return (
    <main className="App bg-dark text-light min-vh-100 container-fluid p-0">
      <Routes>
        <Route index element={IndexElement} />
        {routes.map((route, index) => (
          <Route
            path={route.path}
            element={<route.Element route={route} index={index} key={index} />}
            key={index}
          />
        ))}
      </Routes>
    </main>
  );
};

export default App;
