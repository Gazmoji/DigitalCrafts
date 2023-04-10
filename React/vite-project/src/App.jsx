import { Component } from "react";
import Navbar from "./Navbar";
import Description from "./Description";
import Information from "./Information";

class App extends Component {
  render() {
    const navBar = [
      { name: "HighOnCoding" },
      { name: "Home" },
      { name: "Categories" },
    ];

    return (
      <>
        <Navbar navBar={navBar} />

        <Description />
        <Information />
      </>
    );
  }
}

export default App;
