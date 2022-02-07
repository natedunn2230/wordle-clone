import "./WordRow.css";

function WordRow() {
  return (
    <div className="row">
      <Letter />
      <Letter />
      <Letter />
      <Letter />
      <Letter />
    </div>
  );
}

function Letter() {
  return <input></input>;
}

export default WordRow;
