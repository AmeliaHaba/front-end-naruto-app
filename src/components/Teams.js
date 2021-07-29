import React, { Component } from "react";
import { Link } from "react-router-dom";
import KakashiImg from "../images/Kakashi.jpg";
import GuyImg from "../images/Guy.jpg";
import AsumaImg from "../images/Asuma.jpg";
import KurenaiImg from "../images/Kurenai.jpg";


const teamList = [
  {
    name: "Kakashi",
    description:
      "Team 7 is led by Kikashi Sensei. Kikashi is known for always showing up late, reading romance novels, and for being the Copy Cat Ninja.",
    image: KakashiImg,
  },
  {
    name: "Asuma",
    description:
      "Team 7 is led by Kikashi Sensei. Kikashi is known for always showing up late, reading romance novels, and for Copy Cat Ninja.",
    image: AsumaImg,
  },
  {
    name: "Guy",
    description:
      "Team 7 is led by Kikashi Sensei. Kikashi is known for always showing up late, reading romance novels, and for being the Copy Cat Ninja.",
    image: GuyImg,
  },
  {
    name: "Kurenai",
    description:
      "Team 7 is led by Kikashi SenseiKikashi is known for always showing up late, reading romance novels, and for being the Copy Cat Ninja.",
    image: KurenaiImg,
  },
];

class Teams extends Component {
  render() {
    return (
      <>
        <h1 className="teams-header">Choose Your Team</h1>
        <div className="all-teams">
          {teamList.map((team) => {
            return (
              <div className="team-container" >
                <h2 className="team-name">
                  <Link to={`/${team.name}`}>{team.name}</Link>
                </h2>
                <img className={`${team.name}-img team-img`} src={team.image} alt="logo img" />
                <p className="team-desc">{team.description}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Teams;
