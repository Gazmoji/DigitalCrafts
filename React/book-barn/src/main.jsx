import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./main-content";
import AddBook from "./AddBook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/main-content" element={<MainContent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
