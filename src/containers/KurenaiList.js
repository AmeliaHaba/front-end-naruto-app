import { Component } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../redux/actions/index";
import Character from "../components/Character";

class KurenaiList extends Component {
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
    const teamKurenai = this.props.characters.map((character) => {
      if (character.team === "Kurenai") {
        return <Character key={character.id} character={character} />;
      }
    });
    return <div>{teamKurenai}</div>;
  }
}


const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

export default connect(mapStateToProps, { fetchCharacters })(KurenaiList);
