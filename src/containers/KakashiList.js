import { Component } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../redux/actions/index";
import Character from "../components/Character";

class KakashiList extends Component {

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    console.log(this.props);
    const teamKakashi = this.props.characters.map((character) => {
      if (character.team === "Kakashi") {
        return <Character key={character.id} character={character} />;
      }
    });
    return <div>{teamKakashi}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};


export default connect(mapStateToProps, { fetchCharacters })(KakashiList);
