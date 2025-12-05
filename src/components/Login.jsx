const Login = () => {
  const loginHandler = () => {};
  return (
    <>
      <label>Email</label>
      <input type="email" />
      <label>Password</label>
      <input type="password" />
      <button onClick={loginHandler}>Login</button>
    </>
  );
};

export default Login;
