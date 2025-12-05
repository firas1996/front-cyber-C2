const Login = ({ myName, getData }) => {
  const abc = "Wolrd !";
  getData(abc);
  return (
    <>
      <h2>My name is {myName} </h2>
    </>
  );
};

export default Login;
