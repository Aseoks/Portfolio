import React, { useState } from "react";
import {
  BackBrick,
  Moveingtext,
  MoveingtextBottom,
  BackArrow,
  Header,
} from "../components";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [visibleButton, setVisibleButton] = useState(false);

  const mainContentDiv = document.getElementById("mainContent");

  const handleScroll = (e) => {
    if (e.target.scrollTop > 10) {
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

  const [record, setRecord] = useState({
    from_name: "",
    reply_to: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();    
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, event.target, process.env.REACT_APP_USER_ID)
    .then((result) => {
      console.log(result.text);      
    }, (error) => {
      console.log(error.text);
      
    });
  event.target.reset() 
};

  return (
    <>
      <Moveingtext text="Contact Me" />
      <div
        className="h-full grid md:grid-cols-2 md:grid-rows-2 w-full overflow-auto min-h-fit"
        onScroll={handleScroll}
        id="mainContent"
      >
        <BackBrick
          pageName="Contact Me"
          color="bg-yellow-300"
          hoverColor="hover:bg-yellow-400"
        />
        <div className="border-2 border-black order-2 md:order-1 row-span-2">
          <Header text="Send me a message:" />
          <div className="pt-4 px-8">
            <form onSubmit={handleSubmit} className="w-full">
              <div>
                <label htmlFor="name" className="font-semibold pt-4 flex flex-col text-xl">Your name:</label>
                <input
                  type="text"
                  id="name"
                  name='from_name'
                  onChange={(e) => handleInputChange(e)}
                  className="border-bottom border-b-2 focus:bg-yellow-300 border-black px-1"
                  placeholder="Jhon"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-semibold pt-4 flex flex-col text-xl">Your email:</label>
                <input
                  type="email"
                  id="email"                  
                  name='reply_to'
                  onChange={(e) => handleInputChange(e)}
                  className="border-bottom border-b-2 focus:bg-yellow-300 border-black px-1"
                  placeholder="jhonvojtyla@gmail.vo"
                />
              </div>

              <div>
                <label htmlFor="text" className="font-semibold pt-4 flex flex-col text-xl">Your message:</label>
                <textarea                 
                  id="text"
                  name='message'
                  onChange={(e) => handleInputChange(e)}
                  rows='6'
                  className="w-full border-bottom border-b-2 focus:bg-yellow-300 border-black px-1"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
                />
              </div>

              <button type="submit" className="my-4 px-4 py-2 bg-black text-yellow-300 text-xl font-semibold hover:bg-yellow-300 hover:text-black">Submit</button>
            </form>
          </div>
        </div>

        <div className="border-2 border-black order-1 md:order-2" >
          <Header text="Contact:" />
          <div className="flex flex-col pt-4 px-8 ">
            <div className="flex text-base md:text-xl pt-1 pb-2">
              <p className="pr-2 font-semibold font-roboto">E-mail: </p>
              <p className="hover:border-b-2 duration-75 border-yellow-400 font-mono break-all">
                wojciechmeck@gmail.com
              </p>
            </div>
            <div className="flex text-base md:text-xl py-2">
              <p className="pr-2 font-semibold font-roboto">Github:</p>
              <p className="hover:border-b-2 duration-75 border-yellow-400 ">
                <Link to="https://github.com/WMeck" target="_blank" className="font-mono break-all">
                https://github.com/WMeck
                </Link>
              </p>
            </div>
            <div className="flex text-base md:text-xl py-2">
              <p className="pr-2 font-semibold font-roboto">Linkedin:</p>
              <p className="hover:border-b-2 duration-75 border-yellow-400 ">
                <Link
                  to="https://www.linkedin.com/in/wojciechmeck/"
                  target="_blank" className="font-mono break-all"
                >
                  https://www.linkedin.com/in/wojciechmeck/
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {visibleButton && (
        <BackArrow color="bg-black" fill="yellow" scrollUpFromParent={scrollUp} />
      )}
      <MoveingtextBottom text="Contact Me" />
    </>
  );
};

export default ContactMe;
