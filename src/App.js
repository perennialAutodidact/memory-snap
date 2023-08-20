import GameProvider from "components/GameProvider";
import "./styles/App.scss";
import SetupForm from "components/SetupForm";

function App() {
  return (
    <GameProvider>
      <div className="App bg-dark text-light vh-100 container-fluid">
        <header>
          <h1>Memory Snap</h1>
        </header>
        <div className="container">{/* <SetupForm /> */}</div>
      </div>
    </GameProvider>
  );
}

export default App;
