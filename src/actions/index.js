import { URL, AUTH } from "../utils/GlobalConet";
import axios from "axios";

export const loginReques = payload => ({
  type: "LOGIN_REQUEST",
  payload
});

export const maritimoRequest = payload => ({
  type: "MARITIMO_REQUEST",
  payload
});

export const terrestreRequest = payload => ({
  type: "TERRESTRE_REQUEST",
  payload
});

export const aereoRequest = payload => ({
  type: "AEREO_REQUEST",
  payload
});

export const facturasRequest = payload => ({
  type: "FACTURAS_REQUEST",
  payload
});

export const setError = payload => ({
  type: "SET_ERROR",
  payload
});

export const logOut = payload => ({
  type: "LOGOUT_REQUEST",
  payload
});

export const sendLogin = (section, payload, redirectURL, history) => {
  return dispatch => {
    axios
      .post(
        `${URL}${section}`,
        { rfc: payload.username, password: payload.password },
        {
          auth: AUTH
        }
      )
      .then(({ data }) => {
        dispatch(loginReques(data));
        dispatch(getMaritimo("embarque", data.clave));
        dispatch(getFacturas("getFacturas", data.clave));
      })
      .then(() => {
        history.push(redirectURL);
      })
      .catch(function(err) {
        dispatch(setError(err));
      });
  };
};

export const getMaritimo = (section, payload) => {
  return dispatch => {
    axios
      .get(`${URL}${section}/${payload}`, {
        auth: AUTH
      })
      .then(function(response) {
        dispatch(maritimoRequest(response.data));
      });
  };
};

export const getTerrestre = (section, payload) => {
  return dispatch => {
    axios
      .get(`${URL}${section}/${payload}`, {
        auth: AUTH
      })
      .then(function(response) {
        dispatch(terrestreRequest(response.data));
      });
  };
};

export const getFacturas = (section, payload) => {
  return dispatch => {
    axios
      .get(`${URL}${section}/${payload}`, {
        auth: AUTH
      })
      .then(function(response) {
        dispatch(facturasRequest(response.data));
      });
  };
};

export const getAereo = (section, payload) => {
  return dispatch => {
    axios
      .get(`${URL}${section}/${payload}`, {
        auth: AUTH
      })
      .then(function(response) {
        dispatch(aereoRequest(response.data));
      });
  };
};



export const sendAttachment = (section, payload) => {
  var download
  var linkfile
  var nombres
  return dispatch => {
    axios
      .post(
        `${URL}${section}`,
        payload,
        {
          auth: AUTH
        }
      )
      .then(({ data }) => {
        console.log (data)
        download = document.createElement("a")
        linkfile = `data:application/octet-stream;base64,${data.encode}`
        nombres = data.nombre
      }).finally(()=>{
        let blob = dataURIToBlob(linkfile);
        let url = global.URL.createObjectURL(blob);
        download.href = url;
        download.download = nombres;
        download.click();
      });
  };
};

function dataURIToBlob(dataURI) {

  var binStr = atob(dataURI.split(',')[1]),
    len = binStr.length,
    arr = new Uint8Array(len),
    mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  for (var i = 0; i < len; i++) {
    arr[i] = binStr.charCodeAt(i);
  }

  return new Blob([arr], {
    type: mimeString
  });

}
