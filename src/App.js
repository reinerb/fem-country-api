import "./styles/App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faMoon } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Main from "./components/Main";

library.add(faCoffee, faMoon);

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
