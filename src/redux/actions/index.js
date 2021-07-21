// this is where fetches go
export const fetchCharacters = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/characters")
      .then((response) => response.json())
      .then((characters) => {
        console.log(characters);
        dispatch({ type: "FETCH_CHARACTERS", payload: characters });
      });
  };
};
