import React from "react";
import { BackBrick, Moveingtext, MoveingtextBottom } from "../components";


const ContactMe = () => {
  return (
    <>
      <Moveingtext text="Contact Me" />
      <div className="h-full grid md:grid-cols-2 md:grid-rows-2 w-full  ">
        <BackBrick pageName="Contact Me" color="bg-yellow-300" hoverColor="hover:bg-yellow-400"/>
        <div className="border-2 border-black">1</div>
        <div className="border-2 border-black">2</div>
        <div className="border-2 border-black">3</div>
      </div>
      <MoveingtextBottom text="Contact Me" />
    </>
  );
};

export default ContactMe;
