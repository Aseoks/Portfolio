import React from "react";
import { Moveingtext, MoveingtextBottom, BackBrick } from "../components";



const MyProjects = () => {
  return (
    <>
      <Moveingtext text="My Projects" />
      <div className="h-full grid md:grid-cols-2 md:grid-rows-2 w-full  ">
      <BackBrick pageName="My Projects" color="bg-purple-600" hoverColor="hover:bg-purple-700"/>
        <div className="border-2 border-black">1</div>
        <div className="border-2 border-black">2</div>
        <div className="border-2 border-black">3</div>
      </div>
      <MoveingtextBottom text="My Projects" />
    </>
  );
};

export default MyProjects;
