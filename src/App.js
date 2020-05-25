import React from "react";
import "./App.css";
import NavComponent from "./Navbar";
import Profile from "./Home";
import NewParticle from "./realParticleJS.js";
import "./styles.css";
import NotFoundPage from "./404";
import Home from "./HomePage"; //redners out my home page info\
import ResumePage from "./ResumePage";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/Projects"} component={ProjectPage} />
          <Route path={"/Resume"} component={ResumePage} />
          <Route path={"/404"} component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
