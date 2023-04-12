import { Component } from "react";
import Header from "./header";
import MainContent from "./main-content";
import AddBook from "./AddBook";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      search: "",
    };
  }
  componentDidMount() {
    this.fetchBooks();
  }

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
