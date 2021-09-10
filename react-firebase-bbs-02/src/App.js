import logo from "./logo.svg";
import "./App.css";
import {
  Header,
  MainNav,
  BBsMain,
  BBsWrite,
  Login,
  Join,
  Detail,
} from "./comps";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainNav />
      </div>
      <Route path="/" component={BBsMain} exact />
      {/* <Switch> */}
      <Route path="/write/:id" component={BBsWrite} exact />
      <Route path="/write" component={BBsWrite} exact />
      {/* </Switch> */}
      <Route path="/login" component={Login} exact />
      <Route path="/join" component={Join} exact />
      <Route path="/detail/:id" component={Detail} exact />
    </BrowserRouter>
  );
}

export default App;
