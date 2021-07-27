import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HowTo from "./components/HowTo";
import About from "./components/About";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import KakashiList from "./containers/KakashiList";
import GuyList from "./containers/GuyList";
import AsumaList from "./containers/AsumaList";
import KurenaiList from "./containers/KurenaiList";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/About" component={About} />
            <Route path="/HowTo" component={HowTo} />
            <Route path="/Kakashi" component={KakashiList} />
            <Route path="/Guy" component={GuyList} />
            <Route path="/Asuma" component={AsumaList} />
            <Route path="/Kurenai" component={KurenaiList} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
