import React, { useState } from "react";
import { HoverText } from ".";

const SkillIcon = ({ path, vx, skillName }) => {
const [isHover, setIsHover] = useState(false)

const handleMouseEnter = () =>{
  setIsHover(true)
}

const handleMouseLeave = () =>{
  setIsHover(false)
}

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <svg
        width="48"
        height="48"
        viewBox={`0 0 ${vx} ${vx}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill="black" />
      </svg>
      {isHover === true? <HoverText skillName={skillName} /> : <></>}
    </div>
  );
};

export default SkillIcon;
