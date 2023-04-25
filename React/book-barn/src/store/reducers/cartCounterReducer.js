import * as actionTypes from "../actions/actionTypes";

const initialState = {
  book: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOOKS:
      return {
        ...state,
        book: state.book + 1,
      };
    default:
      return state;
  }
};

export default reducer;
