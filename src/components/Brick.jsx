import React from "react";
import { Link } from "react-router-dom";

const Brick = ({ number, color, direction }) => {
  return (
    <Link to={`/${direction}`}>
      <div
        className={`h-full text-4xl font-light uppercase flex justify-center items-center border-2 border-black hover:${color} focus:${color} hover:font-bold hover:underline hover:cursor-pointer`}
      >
        {number}
      </div>
    </Link>
  );
};

export default Brick;
