import { Component } from "react";

class AddBook extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      country: "",
      imgsrc: "",
    };
  }
  addBookChange = (e) => {
    console.log(e.target);
    console.log(e.target.name);

    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleAddBook = async () => {
    const response = await fetch("http://localhost:8080/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    });
    const result = await response.json();
    console.log(result);
  };
  render() {
    return (
      <>
        <h1>Add A Book Here</h1>
        <input
          name="title"
          placeholder="Enter Book Title"
          onChange={this.addBookChange}
        ></input>
        <input
          name="author"
          placeholder="Enter Book Author"
          onChange={this.addBookChange}
        ></input>
        <input
          name="country"
          placeholder="Enter Book Country"
          onChange={this.addBookChange}
        ></input>
        <input
          name="imgsrc"
          placeholder="Enter Image Address"
          onChange={this.addBookChange}
        ></input>
        <button onClick={this.handleAddBook}>Add a Book</button>
      </>
    );
  }
}

export default AddBook;
