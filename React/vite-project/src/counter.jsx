import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counterValue: 0,
    };
  }

  countingUp = () => {
    this.setState({ counterValue: this.state.counterValue + 1 });
  };
  countingDown = () => {
    this.setState({ counterValue: this.state.counterValue - 1 });
  };
  render() {
    return (
      <>
        <button onClick={this.countingDown}>Decrease Value</button>
        <h1>{this.state.counterValue}</h1>
        <button onClick={this.countingUp}>Increase Value</button>
      </>
    );
  }
}

export default Counter;
