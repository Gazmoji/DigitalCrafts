import { Component } from "react";
import Name from "./Name";
import Friends from "./Friends";

class App extends Component {
  render() {
    const friends = [
      { name: "Alex" },
      { name: "Curran" },
      { name: "Brandon" },
      { name: "Noah" },
      { name: "Evan" },
    ];
    return (
      <>
        <Friends friends={friends} />
        <Name />
        <Name name="Angelidis" />
        <Name name="George" />
      </>
    );
  }
}

export default App;
