import "./App.scss";
import Header from "./components/shared/header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { Route } from "react-router-dom";
import SnakePage from "./pages/SnakePage/SnakePage";
import HanoiPage from "./pages/HanoiPage/HanoiPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/snake" component={SnakePage} />
      <Route path="/hanoi" component={HanoiPage} />
    </div>
  );
}

export default App;
