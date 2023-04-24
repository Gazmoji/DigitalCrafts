import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";
import * as actionTypes from "../store/actions/actionTypes";

function BookMainPage(props) {
  return (
    <>
      <h1>Placeholder</h1>
      <h2>{props.books}</h2>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.book,
  };
};

export default connect(mapStateToProps)(BookMainPage);
