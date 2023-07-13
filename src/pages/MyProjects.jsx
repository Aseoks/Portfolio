import React, { useState } from "react";
import { Moveingtext, MoveingtextBottom, BackBrick, BackArrow } from "../components";



const MyProjects = () => {

  const [visibleButton, setVisibleButton] = useState(false);

  const mainContentDiv = document.getElementById("mainContent");

  const handleScroll = () => {
    if (mainContentDiv.scrollTop > 10) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  };

  const scrollUp = () => {
    mainContentDiv.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Moveingtext text="My Projects" />
      <div className="h-full grid md:grid-cols-2 md:grid-rows-2 w-full" onScroll={handleScroll}
        id="mainContent">
      <BackBrick pageName="My Projects" color="bg-purple-600" hoverColor="hover:bg-purple-700"/>
        <div className="border-2 border-black">1</div>
        <div className="border-2 border-black">2</div>
        <div className="border-2 border-black">3</div>
      </div>

      {visibleButton && <BackArrow color="bg-purple-600" scrollUpFromParent={scrollUp} />}
      <MoveingtextBottom text="My Projects" />
    </>
  );
};

export default MyProjects;
