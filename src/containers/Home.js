import React, { Component } from "react";
import Banner from "../components/Banner";
import Teams from "../components/Teams";
import Test from "../components/Test";

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Teams />
        <Test />
      </div>
    );
  }
}

export default Home;
