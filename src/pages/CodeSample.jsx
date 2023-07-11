import React from "react";
import { BackBrick, Moveingtext, MoveingtextBottom } from "../components";


const CodeSample = () => {
  return (
    <>
      <Moveingtext text="Code Sample" />
      <div className="h-full grid md:grid-cols-2 md:grid-rows-2 w-full  ">
        <BackBrick pageName="Code Sample" color="bg-fuchsia-400" hoverColor="hover:bg-fuchsia-500" />
        <div className="border-2 border-black">1</div>
        <div className="border-2 border-black">2</div>
        <div className="border-2 border-black">3</div>
      </div>
      <MoveingtextBottom text="Code Sample" />
    </>
  );
};

export default CodeSample;
