import { Component } from "react";
import Navbar from "./Navbar";
import Description from "./Description";
import Information from "./Information";
import Counter from "./counter";
import Switch from "./Switch";

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
        <Counter />
        <Switch />
      </>
    );
  }
}

export default App;
