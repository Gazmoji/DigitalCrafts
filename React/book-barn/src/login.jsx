import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
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
        <input type="text" name="username" placeholder="username" />
        <div>
          <label htmlFor="formGroupInput" className="form-label">
            Password
          </label>
        </div>
        <input type="password" name="password" />
        <br />
        <button onClick={handleLogin}>Log In</button>
        <br />
        <a href="/register">Not a user? Sign up here!</a>
      </div>
    </>
  );
}

export default Login;
