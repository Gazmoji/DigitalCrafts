import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actionCreators from "./store/creators/actionCreators";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("jwtToken");

    props.onLogout();

    navigate("/login");
  });
  return <></>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actionCreators.isAuth()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
