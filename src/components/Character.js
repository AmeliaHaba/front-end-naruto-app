import React from "react";

const Character = (props) => {
  return (
    <div className="this-character">
      <p>Name: {props.character.name} </p>
      <p> Bio: {props.character.bio}</p>
      <p>Village: {props.character.village}</p>
      <p>Team: {props.character.team}</p>
    </div>
  );
};

export default Character;
