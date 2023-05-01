import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as actionCreators from "./store/creators/actionCreators";

function Login(props) {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const handleLogin = (token) => {
    if (token) {
      props.handleLogin(token);
      navigate("/");
    } else {
      setErrorMessage("Invalid Credentials");
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="login">
        <h3>LOG IN</h3>
        <div>
          <label htmlFor="formGroupInput" className="form-label">
            Username
          </label>
        </div>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <div>
          <label htmlFor="formGroupInput" className="form-label">
            Password
          </label>
        </div>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleLogin}>Log In</button>
        <br />
        <a href="/register">Not a user? Sign up here!</a>
        {errorMessage}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: () => {
      try {
        dispatch(actionCreators.isAuth());
      } catch (error) {
        console.error("Error dispatching isAuth action:", error);
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
