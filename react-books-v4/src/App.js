import bono from './img/다운로드1.png'
import bono1 from './img/다운로드2.jpg'
import bono2 from './img/다운로드3.jpg'
import bono3 from './img/다운로드4.png'
import './App.css';
import './css/MainNav.css';
import './css/Book.css';
import MainNav from './comps/MainNav';
import BookMain from './comps/BookMain';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bono2} className="App-logo" alt="logo" />
        <img src={bono} className="App-logo" alt="logo" />
        <img src={bono3} className="App-logo" alt="logo" />
        <img src={bono1} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
      <MainNav/>
      <BookMain/>
      </BrowserRouter>      
    </div>
  );
}

export default App;
