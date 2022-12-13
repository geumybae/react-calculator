import './App.css';

const getNum = (e) => {
  console.log("e : " , e);
};

function App() {
  return (
    <div className="App">
      <div>
        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
        <button>÷</button>  
      </div>
      <div>
        <button value="7" onClick={getNum}>7</button>
        <button value="8" onClick={getNum}>8</button>
        <button value="9" onClick={getNum}>9</button>
        <button>×</button>
      </div>
      <div>
        <button value="4" onClick={getNum}>4</button>
        <button value="5" onClick={getNum}>5</button>
        <button value="6" onClick={getNum}>6</button>
        <button>-</button>
      </div>
      <div>
        <button value="1" onClick={getNum}>1</button>
        <button value="2" onClick={getNum}>2</button>
        <button value="3" onClick={getNum}>3</button>
        <button>+</button>
      </div>
      <div>
        <button value="0" onClick={getNum}>0</button>
        <button>.</button>
        <button>=</button>
      </div>
    </div>
  );
}

export default App;
