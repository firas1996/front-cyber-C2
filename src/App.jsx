import Login from "./components/Login";
const App = () => {
  const myName = "Firas";
  return (
    <>
      <h1>Hello</h1>
      <Login myName={myName} />
    </>
  );
};
export default App;
