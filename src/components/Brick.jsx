import React from "react";
import { Link } from "react-router-dom";

const Brick = ({ number, color, direction }) => {

const colors = {
  blue: 'hover:bg-sky-300',
  purple: 'hover:bg-purple-600',
  fuchsia: 'hover:bg-fuchsia-400',
  yellow: 'hover:bg-yellow-300'
}

  return (
    <Link to={`/${direction}`}>
      <div
        className={`h-full text-4xl font-light uppercase flex justify-center items-center border-2 border-black hover:font-bold hover:underline hover:cursor-pointer ${colors[color]}`}        
      >
        {number}
      </div>
    </Link>
  );
};

export default Brick;
