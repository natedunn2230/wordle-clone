import "./App.css";
import Header from "./Header/Header";
import Playfield from "./PlayField/Playfield";
import Keyboard from "./Keyboard/keyboard";

function App() {
  return (
    <div className="App">
      <Header text="wordle" />
      <Playfield />
      <Keyboard />
    </div>
  );
}

export default App;
