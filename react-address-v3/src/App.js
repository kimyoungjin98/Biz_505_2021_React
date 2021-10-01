import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressList from "./comps/AddressList";
import AppContextProvider from "./context/AppContextProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Adress</h1>
      </header>
      <AppContextProvider>
        <AddressInput />
        <AddressList />
      </AppContextProvider>
    </div>
  );
}

export default App;
