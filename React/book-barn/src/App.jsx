import { Component } from "react";
import Header from "./header";
import MainContent from "./main-content";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          books: result,
        });
      });
  }

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
        <MainContent books={this.state.books} />
      </>
    );
  }
}
export default App;
