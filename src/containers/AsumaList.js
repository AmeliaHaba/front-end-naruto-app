import { Component } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../redux/actions/index";
import Character from "../components/Character";

class AsumaList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    console.log(this.props);
    const teamAsuma = this.props.characters.map((character) => {
      if (character.team === "Asuma") {
        return <Character key={character.id} character={character} />;
      }
    });
    return <div>{teamAsuma}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

export default connect(mapStateToProps, { fetchCharacters })(AsumaList);
