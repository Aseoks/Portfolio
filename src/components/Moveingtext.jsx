import React from "react";
import "../style/Moveingtext.css";

const Moveingtext = ({ text }) => {
  return (
    <div className="hidden md:block font-mono font-bold">
      <div className="overflow-visivle border-solid font-bold border-black border-2 flex bg-gray-200 w-full ">
        <ul
          className={`capitalized flex justify-between h-14 items-center w-full animate-moveleft`}
        >
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
        </ul>

        <ul
          className={`animation-delay capitalized flex justify-between h-14 items-center w-full animate-moveleftsecond`}
        >
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
          <li className="w-[12.5vw] text-center px-2 leading-8">{text}</li>
        </ul>
      </div>
    </div>
  );
};

export default Moveingtext;
