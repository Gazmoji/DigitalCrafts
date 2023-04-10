import { Component } from "react";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    const navBar = [{ name: "Home" }, { name: "Categories" }];
    return (
      <>
        <Navbar navBar={navBar} />
      </>
    );
  }
}

export default App;
