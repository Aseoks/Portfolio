import React from "react";
import { Link } from "react-router-dom";
import "../style/MainBrick.css"

const MainBrick = ({ number, color, direction }) => {
  return (
    <Link to={`/${direction}`}>
      <div
        className={`h-full flex flex-col justify-center items-center border-2 border-black hover:bg-sky-300 focus:bg-sky-300 hover:cursor-pointer`}
        id='displayProperty'
      >
        <div id="hello">
          <h1 className="text-7xl font-bold font-roboto">
            Hello! <br /> I`m Wojtek
          </h1>
          <p className="pt-5 text-2xl font-mono">I`m a growing Web Developer</p>
        </div>
        <div className="hidden " id="about">About Me</div>
      </div>
    </Link>
  );
};

export default MainBrick;
