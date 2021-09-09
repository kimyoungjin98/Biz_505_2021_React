import logo from "./logo.svg";
import "./App.css";
import { Header, MainNav, BBsMain, BBsWrite, Login, Join } from "./comps/index";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainNav />
      </div>
      <Route path="/" component={BBsMain} exact />
      <Route path="/write" component={BBsWrite} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/join" component={Join} exact />
    </BrowserRouter>
  );
}

export default App;
