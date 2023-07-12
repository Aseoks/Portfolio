import React from "react";
import Brick from "./Brick";
import MainBrick from "./MainBrick";



const Navigation = () => {
  return (
   
     <div className="h-full grid md:grid-cols-2 md:grid-rows-2 w-full  ">
        <MainBrick direction="aboutme" color='bg-sky-300' to="/my-portfolio/src/pages/AboutMe.jsx"/>
        <Brick direction="myprojects" color='bg-purple-600' to="/my-portfolio/src/pages/MyProjects.jsx" number="My Projects" />
        <Brick direction="codesamples" color='bg-fuchsia-400' number="Code Samples" />
        <Brick direction ="contact" color='bg-yellow-300' number="Contact Me" />       
      </div>
    
  );
};

export default Navigation;
