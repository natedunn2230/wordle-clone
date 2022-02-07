import "./Header.css";

function header(props) {
  return (
    <div className="header">
      <h1>{props.text}</h1>
    </div>
  );
}

export default header;
