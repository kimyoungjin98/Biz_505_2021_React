import logo from './logo.svg';
import './App.css';

// 개별로 컴포넌트 import
// import Header from './comps/Header'
// import Rembody from './comps/RemBody'
// import Footer from './comps/footer';

// index.js 파일을 사용하여 통합관리하기
// import { Header, RemBody, Footer } from "./comps/index"

// ./comps 폴더에 index.js(jsx) 파일이 있으면 파일 이름을 생략할 수 있다
import { Header, RemBody, Footer } from "./comps"

function App() {
  return (
    <div className="App">
      <Header/>
	  <RemBody/>
	  <Footer/>
    </div>
  );
}

export default App;
