import { Component } from "react";

class Switch extends Component {
  constructor() {
    super();

    this.state = {
      isOn: false,
    };
  }
  buttonSwap = () => {
    this.setState({
      isOn: !this.state.isOn,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.buttonSwap}>
          {this.state.isOn ? "OFF" : "ON"}
        </button>
      </>
    );
  }
}

export default Switch;
