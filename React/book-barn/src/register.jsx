import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handelSignupInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = async () => {
    const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const result = await response.json();
    if (result.success) {
      localStorage.setItem("jwtToken", result.token);
      navigate("/login");
    } else {
      const errorMessage = "Failed";
      return errorMessage;
    }
  };

  return (
    <>
      <div className="login">
        <h3>SIGN UP</h3>
        <div>
          <label htmlFor="formGroupInput" className="form-label">
            Username
          </label>
        </div>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handelSignupInput}
        />
        <div>
          <label htmlFor="formGroupInput" className="form-label">
            Password
          </label>
        </div>
        <input type="password" name="password" onChange={handelSignupInput} />
        <br />
        <button onClick={handleRegister}>Register</button>
        <br />
        <a href="/login">Already a user? Log in here!</a>
        {errorMessage}
      </div>
    </>
  );
}

export default Register;
