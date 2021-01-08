import { NavLink, Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Greeting from "./Components/Greeting";
import Welcome from "./Components/Welcome";
import { StyledComponent } from "./Components/StyledComponent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      <Greeting name="Mikhaila" age="12"/>
      <Greeting name="Mik" age="15"/>
      <Greeting name="Kaila" age="19"/>
      <Welcome />
      <StyledComponent />
    </BrowserRouter>
  );
}

export default App;
