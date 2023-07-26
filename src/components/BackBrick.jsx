import React from 'react';
import { Link } from "react-router-dom";

const BackBrick = ({pageName, color, hoverColor}) => {
  return (
    <>
      <Link to="/">
          <div className={`h-full text-4xl ${color} ${hoverColor} uppercase flex flex-col gap-4 justify-center items-center border-2 border-black font-bold underline hover:cursor-pointer font-roboto py-8`}>
            <h2>{pageName}</h2>
            <div>
            <svg
                width="60"
                height="25"
                viewBox="0 0 76 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 15L25 29.4338L25 0.566239L0 15ZM76 12.5L22.5 12.5L22.5 17.5L76 17.5L76 12.5Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </Link>
    </>
  )
}

export default BackBrick