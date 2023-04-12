import { Component } from "react";

class MainContent extends Component {
  handleDeleteBook = async (bookid) => {
    const response = await fetch(`http://localhost:8080/api/books/${bookid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
  };

  handleUpdateBook = async () => {
    const response = await fetch("http://localhost:8080/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
  };
  render() {
    const books = this.props.books;
    const bookItems = books.map((book) => {
      return (
        <div key={book.id}>
          <li id="info">{book.title}</li>
          <li id="info"> Publisher: {book.author}</li>
          <li id="info">Country/Year: {book.country}</li>
          <img src={`${book.imgsrc}`} width="100px" />
          <button onClick={() => this.handleDeleteBook(book.id)}>
            Delete Book
          </button>
          <button onClick={this.handleUpdateBook}>Update Book</button>
        </div>
      );
    });
    return <ul>{bookItems}</ul>;
  }
}

export default MainContent;
