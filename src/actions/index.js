import axios from "axios";


export const loginReques = payload => ({
  type: "LOGIN_REQUEST",
  payload
});

export const maritimoRequest = payload => ({
  type: "MARITIMO_REQUEST",
  payload
});

export const setError = payload => ({
  type: "SET_ERROR",
  payload
});

export const sendLogin = (payload, redirectURL, history) => {
  return dispatch => {
    axios
      .post(
        "https://apirestvaliton.herokuapp.com/login",
        { rfc: payload.username, password: payload.password },
        {
          auth: {
            username: "system",
            password: "Sys1638"
          }
        }
      )
      .then(({ data }) => {
        dispatch(loginReques(data));
        dispatch(getMaritimo(data.clave));
      })
      .then(() => {
        history.push(redirectURL);
      })
      .catch(function(err) {
        dispatch(setError(err));
      });
  };
};

export const getMaritimo = payload => {
  return dispatch => {
    axios
      .get(`https://apirestvaliton.herokuapp.com/embarque/${payload}`, {
        auth: {
          username: "system",
          password: "Sys1638"
        }
      })
      .then(function(response) {
        dispatch(maritimoRequest(response.data));
      });
  };
};
