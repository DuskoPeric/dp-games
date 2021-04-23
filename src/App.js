import "./App.scss";
import Header from "./components/shared/header/Header";
import HomePage from "./pages/Home/HomePage";
import { Route } from "react-router-dom";
import SnakePage from "./pages/SnakePage/SnakePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/snake" component={SnakePage} />
    </div>
  );
}

export default App;
