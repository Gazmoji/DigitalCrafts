import * as actionTypes from "./actions/actionTypes";

const initialState = {
  book: 0,
  isAuth: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOOKS:
      return {
        ...state,
        book: state.book + 1,
      };
    case actionTypes.AUTH:
      return {
        ...state,
        isAuth: (state.isAuth = true),
      };
    default:
      return state;
  }
};

export default reducer;
