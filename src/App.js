import "./styles/App.scss";
import SetupForm from "components/SetupForm";
import useGameContext from "hooks/useGameContext/useGameContext";

function App() {
  const {
    state: { game },
  } = useGameContext();
  return (
    <div className="App bg-dark text-light vh-100 container-fluid">
      <header>
        <h1>Memory Snap</h1>
      </header>
      <div className="container">
        {/* TODO: Add routing with React Router */}
        {game.stage === "setup" ? <SetupForm /> : null}
        {/* {game.stage === "playing" ? <Game /> : null} */}
      </div>
    </div>
  );
}

export default App;
