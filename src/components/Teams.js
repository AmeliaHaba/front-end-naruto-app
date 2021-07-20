import React, { Component } from "react";
import KakashiImg from "../images/Kakashi.jpg";
import GuyImg from "../images/Guy.jpg";
import AsumaImg from "../images/Asuma.jpg";
import KurenaiImg from "../images/Kurenai.jpg";

const teamList = [
  {
    name: "Team 7 (Kakashi)",
    description:
      "Team 7 is led by Kikashi Sensei. Kikashi is known for always showing up late, reading romance novels, and for being the Copy Cat Ninja.",
    image: KakashiImg,
  },
  {
    name: "Team 10 (Asuma)",
    description:
      "Team 7 is led by Kikashi Sensei. Kikashi is known for always showing up late, reading romance novels, and for Copy Cat Ninja.",
    image: AsumaImg,
  },
  {
    name: "Team Guy",
    description:
      "Team 7 is led by Kikashi Sensei. Kikashi is known for always showing up late, reading romance novels, and for being the Copy Cat Ninja.",
    image: GuyImg,
  },
  {
    name: "Team 8 (Kurenai)",
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
              <div className="team-container">
                <h2 className="team-name">{team.name}</h2>
                <img className="team-img" src={team.image} alt="logo img" />
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
