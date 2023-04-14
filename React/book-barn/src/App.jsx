import { Component } from "react";
import Header from "./header";
import MainContent from "./main-content";
import AddBook from "./AddBook";
import Register from "./register";
import Login from "./login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      books: [],
      search: "",
    };
  }
  componentDidMount() {
    this.fetchBooks();
    this.fetchUsers();
  }

  fetchUsers = async () => {
    const response = await fetch("http://localhost:8080/register");
    const users = await response.json();
    this.setState({
      users: users,
    });
  };

  fetchBooks = async () => {
    const response = await fetch("http://localhost:8080/api/books");
    const books = await response.json();
    this.setState({
      books: books,
    });
  };

  render() {
    const navBar = [
      { name: "Home" },
      { name: "My Books" },
      { name: "Browse" },
      { name: "Community" },
      { name: "Sign In" },
      { name: "Join" },
    ];
    return (
      <>
        <Header navBar={navBar} />
        <input type="textbox"></input>
        <button>Search Here</button>
        <AddBook />
        <MainContent books={this.state.books} />
      </>
    );
  }
}
export default App;
