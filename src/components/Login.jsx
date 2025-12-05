import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const inputChangeHandler = ({ target }) => {
    const { value, name } = target;
    setUserData({ ...userData, [name]: value });
  };
  const loginHandler = async (event) => {
    event.preventDefault();
    const res = await axios.get("http://127.0.0.1:1234/user");
    // const res = await axios.post("http://127.0.0.1:1234/user/signin", userData);
    setUsers(res.data.data);
    console.log(res);
    setUserData({
      email: "",
      password: "",
    });
  };
  return (
    <form onSubmit={loginHandler}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={inputChangeHandler}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={inputChangeHandler}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
