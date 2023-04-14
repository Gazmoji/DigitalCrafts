import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handelSignupInput = (e) => {
    const { name, value } = e.target;
    setCredentials((prevSetCredentials) => ({
      ...prevSetCredentials,
      [name]: value,
    }));
  };
  const handleRegister = async () => {
    const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((res) => res.json());
    console.log(response);
    navigate("/login");
  };

  return (
    <>
      <div class="login">
        <h3>SIGN UP</h3>
        <div>
          <label for="formGroupInput" class="form-label">
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
          <label for="formGroupInput" class="form-label">
            Password
          </label>
        </div>
        <input type="password" name="password" onChange={handelSignupInput} />
        <br />
        <button onClick={handleRegister}>Register</button>
        <br />
        <a href="/login">Already a user? Log in here!</a>
      </div>
    </>
  );
}

export default Register;
