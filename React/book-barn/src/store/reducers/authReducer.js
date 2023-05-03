import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuth: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH:
      return {
        ...state,
        isAuth: (state.isAuth = true),
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isAuth: (state.isAuth = false),
      };
    default:
      return state;
  }
};

export default reducer;
