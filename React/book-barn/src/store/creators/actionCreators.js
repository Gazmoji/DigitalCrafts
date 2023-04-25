import * as actionTypes from "../actions/actionTypes";

export const books = () => {
  return {
    type: actionTypes.BOOKS,
  };
};
export const isAuth = () => {
  return {
    type: actionTypes.AUTH,
  };
};
export const favorite = () => {
  return {
    type: actionTypes.ADD_FAVORITE,
  };
};
