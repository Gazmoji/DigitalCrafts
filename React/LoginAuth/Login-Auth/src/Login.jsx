function Login() {
  const handleChange = (e) => {
    SetUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button onClick={handleLogin}></button>
    </>
  );
}

export default Login;
