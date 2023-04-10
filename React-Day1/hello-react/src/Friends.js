import { Component } from "react";

class Friends extends Component {
  render() {
    const friendNames = this.props.friends.map((friend, index) => {
      return <li key={index}>{friend.name}</li>;
    });

    return <ul>{friendNames}</ul>;
  }
}

export default Friends;
