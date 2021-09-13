import logo from "./logo.svg";
import "./App.css";
import { Header, Footer, BucketMain } from "./comps/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section className="w3-container w3-margin">
        <BucketMain />
      </section>
      <Footer />
    </div>
  );
}

export default App;
