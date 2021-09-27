import './App.css';
import CounterBody from './comps/CounterBody'
import { useState } from 'react'

function App() {
  const [num, setNum] = useState(0);

  const change = (e)=>{
      const _value = e.target.value;
      const value = _value ? parseInt(_value) : 0
      setNum(value)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <CounterBody change={change} num={num}/>
      </header>
    </div>
  );
}

export default App;
