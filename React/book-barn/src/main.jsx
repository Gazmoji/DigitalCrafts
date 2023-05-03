import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./main-content";
import AddBook from "./AddBook";
import Register from "./register";
import Login from "./login";
import ProtectedRoute from "./ProtectedRoute";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Logout from "./Logout";

import authReducer from "./store/reducers/authReducer";
import cartCounterReducer from "./store/reducers/cartCounterReducer";
import favoriteReducer from "./store/reducers/favoriteReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  cartCounterReducer: cartCounterReducer,
  favoriteReducer: favoriteReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const token = localStorage.getItem("jwtToken");
if (token) {
  store.dispatch({ type: "isAuth", payload: token });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route
            path="/main-content"
            element={
              <ProtectedRoute>
                <MainContent />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
