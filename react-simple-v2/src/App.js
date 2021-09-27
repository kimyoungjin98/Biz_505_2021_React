import { useState } from 'react';
import './App.css';
import CounterInput from './comps/CounterInput';
import CounterView from './comps/CounterView';

function App() {
  
  const [num, setNum] = useState(0);
  const change = (value)=>{
    setNum(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <CounterInput change={change}/>
        <CounterView num={num}/>
      </header>
    </div>
  );
}

export default App;
