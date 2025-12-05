import { useState } from "react";
import Login from "./components/Login";
const App = () => {
  const myName = "Firas";
  const [abc, setAbc] = useState("");
  const getData = (data) => {
    setAbc(data);
  };
  return (
    <>
      <h1>Hello, {abc} </h1>
      <Login myName={myName} getData={getData} />
    </>
  );
};
export default App;
