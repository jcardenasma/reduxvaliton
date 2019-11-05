
const reducer = (state, action) => {

  switch (action.type) {
    case "LOGIN_REQUEST":
      let da = new Date();
      let token = da.getTime() + 100*(16 * 60 * 60);
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
    default:
      return state;
  }
};

export default reducer;
