import React from "react";
import useApp from "../Hooks/app-hook";

const Home = () => {
  const { stringState, greet } = useApp();
  return (
    <>
      <h1>Home page</h1>
      <h2>{stringState}</h2>
      <button onClick={() => greet("Hello World!")} style={{backgroundColor:'blue',color:'white',padding:'8px'}} >click</button>
    </>
  );
};

export default Home;
