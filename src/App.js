import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HowTo from "./components/HowTo";
import About from "./components/About";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import Kakashi from "./components/teams/Kakashi";
import Guy from "./components/teams/Guy";
import Asuma from "./components/teams/Asuma";
import Kurenai from "./components/teams/Kurenai";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/About" component={About} />
            <Route path="/HowTo" component={HowTo} />
            <Route path="/kakashi" component={Kakashi} />
            <Route path="/guy" component={Guy} />
            <Route path="/asuma" component={Asuma} />
            <Route path="/kurenai" component={Kurenai} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
