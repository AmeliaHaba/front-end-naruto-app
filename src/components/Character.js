import React from "react";

const Character = (props) => {
  return (
    <div className="this-character">
      <h2>{props.character.name} </h2>
      <p><span>Bio:</span> {props.character.bio}</p>
      <p><span>Village:</span> {props.character.village}</p>
      <p><span>Team:</span> {props.character.team}</p>
    </div>
  );
};

export default Character;
