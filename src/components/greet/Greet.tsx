import React from "react";
import { Props } from "./Greet.types";
const Greet = ({ name }: Props) => {
  return <div>Hello {name ? name : "Guest"}</div>;
};

export default Greet;
