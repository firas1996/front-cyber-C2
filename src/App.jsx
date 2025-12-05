import Login from "./components/Login";
const App = () => {
  const myName = "Firas";
  const getData = (data) => {
    console.log(data);
    return data;
  };
  return (
    <>
      <h1>Hello, {getData()} </h1>
      <Login myName={myName} getData={getData} />
    </>
  );
};
export default App;
