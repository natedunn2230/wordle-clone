import "./App.css";
import Header from "./Header/header";
import Playfield from "./PlayField/playfield";
import Keyboard from "./Keyboard/keyboard";

function App() {
  return (
    <div className="App">
      <Header text="Wordle"/>
      <Playfield/>
      <Keyboard/>    
    </div>
  );
}

export default App;
