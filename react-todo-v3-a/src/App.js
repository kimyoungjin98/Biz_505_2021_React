import "./App.css";
import { TodoMain, TodoInput, TodoList, Login, AuthRoute } from "./comps";
import { Route } from "react-router-dom";

import { LoginRoute } from "./comps";
import { UserContextProvider } from "./context";

function App() {
  return (
    <UserContextProvider>
      <LoginRoute>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <AuthRoute>
            <TodoMain header="TODO LIST" form={<TodoInput />}>
              <TodoList />
            </TodoMain>
          </AuthRoute>
        </Route>
      </LoginRoute>
    </UserContextProvider>
  );
}

export default App;
