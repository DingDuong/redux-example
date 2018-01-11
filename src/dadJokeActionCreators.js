import axios from "axios";

function getJoke(joke) {
  return {
    type: "GET_DAD_JOKE",
    joke
  };
}

export function getDadJoke() {
  return dispatch => {
    return axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      })
      .then(response => {
        dispatch(getJoke(response.data.joke));
      });
  };
}
