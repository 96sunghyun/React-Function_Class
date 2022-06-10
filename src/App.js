import React, { useState } from "react";
import "./App.css";

function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello, World</h1>
      <input
        type="button"
        value="removeFunc"
        onClick={() => setFuncShow(false)}
      />
      <input
        type="button"
        value="removeClass"
        onClick={() => setClassShow(false)}
      />
      {funcShow && <FuncComp initNumber={2} />}
      {classShow && <ClassComp initNumber={2} />}
    </div>
  );
}

function FuncComp(props) {
  const [number, setNumber] = useState(props.initNumber);
  const [date, setDate] = useState(new Date().toString());
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input
        type="button"
        value="random"
        onClick={() => setNumber(Math.random())}
      />
      <input
        type="button"
        value="newDate"
        onClick={() => setDate(new Date().toString())}
      />
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };

  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={() => this.setState({ number: Math.random() })}
        />
        <input
          type="button"
          value="newDate"
          onClick={() => this.setState({ date: new Date().toString() })}
        />
      </div>
    );
  }
}

export default App;
