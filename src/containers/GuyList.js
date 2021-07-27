import { Component } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../redux/actions/index";
import Character from "../components/Character";

class GuyList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    console.log(this.props);
    // eslint-disable-next-line array-callback-return
    const teamGuy = this.props.characters.map((character) => {
      if (character.team === "Guy") {
        return <Character key={character.id} character={character} />;
      }
    });
    return <div>{teamGuy}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

export default connect(mapStateToProps, { fetchCharacters })(GuyList);
