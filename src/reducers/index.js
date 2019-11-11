const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      let da = new Date();
      let token = da.getTime() + 100 * (16 * 60 * 60);
      return {
        ...state,
        loged: action.payload,
        token: token,
        backErrors: {}
      };

    case "SET_ERROR":
      return {
        ...state,
        backErrors: action.payload
      };
    case "MARITIMO_REQUEST":
      return {
        ...state,
        embarquesMar: action.payload
      };
    case "TERRESTRE_REQUEST":
      return {
        ...state,
        embarquesTerr: action.payload
      };
    case "FACTURAS_REQUEST":
      return {
        ...state,
        facturas: action.payload
      };
    case "LOGOUT_REQUEST":
      return {
        ...state,
        loged: {},
        embarquesMar: [],
        terrestre: {},
        embarquesTerr: [],
        aereo: {},
        embarquesAer: [],
        factura: {},
        facturas: [],
        backErrors: {},
        search: [],
        token: {}
      };
    default:
      return state;
  }
};

export default reducer;
