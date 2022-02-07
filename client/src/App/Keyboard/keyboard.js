import "./keyboard.css";

const rowOne = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const rowTwo = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const rowThree = ["enter", "z", "x", "c", "v", "b", "n", "m", "back"];

function keyboard() {
  return (
    <div className="keyboard">
      <div className="keys">
        {rowOne.map((val) => (
          <Key key={val} val={val} />
        ))}
      </div>
      <div className="keys">
        <div className="spacer" />
        {rowTwo.map((val) => (
          <Key key={val} val={val} />
        ))}
        <div className="spacer" />
      </div>
      <div className="keys">
        {rowThree.map((val, i) => (
          <Key lg={i === 0 || i === rowThree.length - 1} key={val} val={val} />
        ))}
      </div>
    </div>
  );
}

function Key(props) {
  return <div className={`key ${props.lg ? "lg" : ""}`}>{props.val}</div>;
}

export default keyboard;
