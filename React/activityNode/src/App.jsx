import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    this.fetchOrders();
  }

  fetchOrders = async () => {
    const response = await fetch("https://island-bramble.glitch.me/orders");
    const orders = await response.json();
    this.setState({
      orders: orders,
    });
  };
  render() {
    return (
      <>
        <CreateOrder />
        <Orders />
      </>
    );
  }
}

export default App;
