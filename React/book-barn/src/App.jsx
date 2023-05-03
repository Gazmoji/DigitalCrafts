import { useState, useEffect } from "react";
import Header from "./header";
import MainContent from "./main-content";
import AddBook from "./AddBook";
import Register from "./register";
import Login from "./login";
import { Route, Routes } from "react-router-dom";

const token = localStorage.getItem("jwtToken");

function App(props) {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
    fetchBooks();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8080/register");
    const users = await response.json();
    setUsers(users);
  };

  const fetchBooks = async () => {
    const response = await fetch("http://localhost:8080/api/books", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const books = await response.json();
    setBooks(books);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredBooks = books.filter((book) => book.title);

  const navBar = [
    { name: "Home", path: "/" },
    { name: "My Books", path: "/my-books" },
    { name: "Browse", path: "/browse" },
    { name: "Community", path: "/community" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <>
      <Header navBar={navBar} />
      <input type="textbox" onChange={handleSearch} />
      <button>Search Here</button>
      <Routes>
        <Route path="/" element={<MainContent books={filteredBooks} />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {props.isAuth ? <navBar to="/logout">Logout</navBar> : null}
      </Routes>
    </>
  );
}

export default App;
