import { Component } from "react";

class MainContent extends Component {
  render() {
    const books = this.props.books;
    const bookItems = books.map((book, index) => {
      return (
        <div>
          <li id="info" key={index}>
            {book.title}
          </li>
          <li id="info">{book.author}</li>
          <li id="info">{book.country}</li>
          <img
            src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`}
          />
          <li id="info">{book.language}</li>
          <a href={book.link} id="booklink">
            Book Link
          </a>
          <li id="info">{book.pages}</li>
        </div>
      );
    });
    return <ul>{bookItems}</ul>;
  }
}

export default MainContent;
