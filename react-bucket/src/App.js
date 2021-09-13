import logo from "./logo.svg";
import "./App.css";
import { Header, Footer, BucketMain } from "./comps/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <BucketMain />
      <Footer />
    </div>
  );
}

export default App;
