import { useState } from 'react';
import './App.css';
import AddressInput from './comps/AddressInput';
import AddressView from './comps/AddressView';

function App() {
  const [info, setInfo] = useState({
      name : "",
      tel : "",
      age : 0,
      addr : "",
    });
  const [infoList, setInfoList] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <AddressInput info={info} setInfo={setInfo} setInfoList={setInfoList} infoList={infoList}/>
        <AddressView infoList={infoList}/>
      </header>
    </div>
  );
}

export default App;
