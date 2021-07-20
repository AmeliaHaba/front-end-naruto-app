import React, { Component } from "react";
import Banner from "../components/Banner";
import Teams from "../components/Teams";

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Teams />
      </div>
    );
  }
}

export default Home;
