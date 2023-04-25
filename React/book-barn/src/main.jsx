import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./main-content";
import AddBook from "./AddBook";
import Register from "./register";
import Login from "./login";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/main-content" element={<MainContent />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
