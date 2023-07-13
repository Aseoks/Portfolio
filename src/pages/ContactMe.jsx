import React, { useState } from "react";
import { BackBrick, Moveingtext, MoveingtextBottom, BackArrow } from "../components";


const ContactMe = () => {

  const [visibleButton, setVisibleButton] = useState(false);

  const mainContentDiv = document.getElementById("mainContent");

  const handleScroll = () => {
    if (mainContentDiv.scrollTop > 300) {
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
      <Moveingtext text="Contact Me" />
      <div className="h-full grid md:grid-cols-2 md:grid-rows-2 w-full" onScroll={handleScroll}
        id="mainContent">
        <BackBrick pageName="Contact Me" color="bg-yellow-300" hoverColor="hover:bg-yellow-400"/>
        <div className="border-2 border-black">1</div>
        <div className="border-2 border-black">2</div>
        <div className="border-2 border-black">3</div>
      </div>

      {visibleButton && <BackArrow color="bg-yellow-300" scrollUpFromParent={scrollUp} />}
      <MoveingtextBottom text="Contact Me" />
    </>
  );
};

export default ContactMe;
