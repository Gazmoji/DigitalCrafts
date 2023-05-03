import { connect } from "react-redux";
import * as actionCreators from "./store/creators/actionCreators";

function MainContent(props) {
  const { books, addToCart } = props;
  const handleDeleteBook = async (bookid) => {
    const response = await fetch(`http://localhost:8080/api/books/${bookid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
  };

  const handleUpdateBook = async () => {
    const response = await fetch("http://localhost:8080/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
  };

  const bookItems = books.map((book) => (
    <div key={book.id}>
      <li id="info">{book.title}</li>
      <li id="info"> Publisher: {book.author}</li>
      <li id="info">Country/Year: {book.country}</li>
      <img src={`${book.imgsrc}`} width="100px" />
      <button onClick={() => handleDeleteBook(book.id)}>Delete Book</button>
      <button onClick={handleUpdateBook}>Update Book</button>
      <button onClick={() => props.addToCart()}>Add to Cart</button>
      <button onClick={() => props.addToFavorites()}>Add to Favorites</button>
    </div>
  ));

  console.log(props.book);
  return (
    <>
      <ul>{bookItems}</ul>
      <h4>Total Number of Items in Cart: {props.book}</h4>
      <h3>Favorites: {props.favorite}</h3>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    book: state.book,
    favorite: state.favorite,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: () => dispatch(actionCreators.books()),
    addToFavorites: () => dispatch(actionCreators.favorite()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
