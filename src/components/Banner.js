import React, { Component } from "react";
import BannerImg from "../images/narutobanner.jpg";

export class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <img className="banner-img" src={BannerImg} alt="Naruto Banner" />
      </div>
    );
  }
}
export default Banner;
