import "./styles/App.scss";
import SetupForm from "components/SetupForm";

function App() {
  return (
    <div className="App bg-dark text-light vh-100">
      <header>
        <h1>Memory Snap</h1>
      </header>
      <SetupForm />
    </div>
  );
}

export default App;
