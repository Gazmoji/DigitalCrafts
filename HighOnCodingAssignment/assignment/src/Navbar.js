class Navbar extends Component {
  render() {
    const navBarArea = this.props.navBar.map((navigation, index) => {
      return <span key={index}>{navigation.name}</span>;
    });
    return { navBarArea };
  }
}
export default Navbar;
