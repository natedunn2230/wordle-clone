import "./Playfield.css";

import WordRow from "./WordRow/WordRow";

function Playfield() {
  return (
    <div className="playfieldContainer">
      <p class="warning">Screen is too small for optimal play</p>
      <div className="playfield">
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
      </div>
    </div>
  );
}

export default Playfield;
