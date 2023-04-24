const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOOKS:
      return {
        ...state,
        books: state.books,
      };
    default:
      return state;
  }
};

export default reducer;
