import './App.css';
import React, { useState } from 'react';

function App() {

  const [formula, setFormula] = useState("");
  const [calNumber, setCalNumber] = useState("");

  const getNum = (e) => {
    setCalNumber((prev) => prev + e.target.value);
    //setFormula((prev) => prev + e.target.value);
  };

  const changePositiveNagitive = (e) => {
    let changeVal = calNumber < 0 ? 1 : -1;
    setCalNumber((prev) => prev * changeVal);
  };

  const getCal = (e) => {
    setFormula((prev) => prev + calNumber);
    setCalNumber(new Function(formula));
  }

  const getPoint = (e) => {
    alert("개발중");
  };

  const getResult = (e) => {
    alert("개발중");
  };

  const claer = () => {
    setFormula("");
    setCalNumber("");
  }

  return (
    <div className="App">
      <div className="fml">{formula}</div>
      <div className="cal">{calNumber}</div>
      <div>
        <button onClick={claer}>AC</button>
        <button onClick={changePositiveNagitive}>+/-</button>
        <button onClick={getCal}>%</button>
        <button value="/" onClick={getCal}>÷</button>  
      </div>
      <div>
        <button value="7" onClick={getNum}>7</button>
        <button value="8" onClick={getNum}>8</button>
        <button value="9" onClick={getNum}>9</button>
        <button value="*" onClick={getCal}>×</button>
      </div>
      <div>
        <button value="4" onClick={getNum}>4</button>
        <button value="5" onClick={getNum}>5</button>
        <button value="6" onClick={getNum}>6</button>
        <button value="-" onClick={getCal}>-</button>
      </div>
      <div>
        <button value="1" onClick={getNum}>1</button>
        <button value="2" onClick={getNum}>2</button>
        <button value="3" onClick={getNum}>3</button>
        <button value="+" onClick={getCal}>+</button>
      </div>
      <div>
        <button value="0" onClick={getNum}>0</button>
        <button onClick={getPoint}>.</button>
        <button onClick={getResult}>=</button>
      </div>
    </div>
  );
}

export default App;
