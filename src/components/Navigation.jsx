import React from "react";
import Brick from "./Brick";
import MainBrick from "./MainBrick";



const Navigation = () => {
  return (
   
     <div className="h-full grid md:grid-cols-2 md:grid-rows-2 w-full  grid-rows-4">
        <MainBrick direction="aboutme" color='blue' to="/my-portfolio/src/pages/AboutMe.jsx"/>
        <Brick direction="myprojects" color='purple' to="/my-portfolio/src/pages/MyProjects.jsx" number="My Projects" />
        <Brick direction="codesamples" color='fuchsia' number="Code Samples" />
        <Brick direction ="contact" color='yellow' number="Contact Me" />       
      </div>
    
  );
};

export default Navigation;
