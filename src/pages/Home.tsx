import React from "react";
import Greet from "../components/greet/Greet";
import Counter from "../components/counter/Counter";
const Home = () => {
  return (
    <div>
      <Greet name="wale" />
      <Counter />
    </div>
  );
};

export default Home;
