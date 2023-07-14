import React, { useState } from "react";
import {
  BackArrow,
  BackBrick,
  Header,
  Moveingtext,
  MoveingtextBottom,
  FormSample,
  APISample,
} from "../components";
import "../style/CodeSample.css";
import { CodeBlock, dracula} from "react-code-blocks";

const CodeSample = () => {
  const [toggleNumber, setToggleNumber] = useState(1);

  const changeToggleNumber = (index) => {
    setToggleNumber(index);
  };

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

  const formCodeSample = `import React, { useState } from "react";
  const FormSample = () => {
    const [record, setRecord] = useState({
      room: "",
      arrival: "",
      departure: "",
      name: "",
      surname: "",
      email: "",
      guests: "1",
      pets: "0",
    });
  
    const handleInputChange = (e) => {
      setRecord({ ...record, [e.target.name]: e.target.value });
    };
  
    const addRecordToFireStore = (event) => {
      event.preventDefault();
      if (record.arrival === "") {
        alert("please choose arrival date");
      } else if (record.departure === "") {
        alert("please choose departure date");
      } else if (record.departure < record.arrival) {
        alert("Arrival must be before departure");
      } else if (
        record.name === "" ||
        record.surname === "" ||
        record.email === ""
      ) {
        alert("please fill all inputs");
      } else {
        console.log(record);
        alert('Booking adde');
      }
    };
  
    return (
      <>      
        {/* Form */}
        <form className="px-8 pb-4 flex flex-col gap-2 w-fit" noValidate>
          {/* Room choice */}
          <div className="flex justify-between">
            <div>Room</div>
            <select
              id="room"
              name="room"
              onChange={(e) => handleInputChange(e)}
              className="text-end"
            >
              <option value={record.room} hidden>
                Select your room
              </option>
                <option value={record.room.value}>Pet friendly room</option>
                <option value={record.room.value}>Shared room</option>
                <option value={record.room.value}>Shared room with bathroom</option>
                <option value={record.room.value}>Pet friendly private room</option>
                <option value={record.room.value}>Two people room</option>
                <option value={record.room.value}>Three people room</option>
            </select>
          </div>
  
          {/* Arrival */}
          <div className="flex justify-between">
            <div>Arrival</div>
  
            <input
              id="arrival"
              name="arrival"
              value={record.arrival}
              onChange={(e) => handleInputChange(e)}
              type="date"
            />
          </div>
          {record.arrival === "" ? (
            <p className="text-red-600 text-end text-xs">Choose arrival date</p>
          ) : (
            ""
          )}
  
          {/* Departure */}
          <div className="flex justify-between">
            <div>Departure</div>
            <input
              id="departure"
              name="departure"
              value={record.departure}
              onChange={(e) => handleInputChange(e)}
              type="date"
            />
          </div>
          {record.departure === "" ? (
            <p className="text-red-600 text-end text-xs">Choose departure date</p>
          ) : (
            ""
          )}
  
          {record.departure < record.arrival ? (
            <p className="text-red-600 text-end text-xs">
              Departure can't be before arrival
            </p>
          ) : (
            ""
          )}
  
          {/* Name */}
          <div className="flex justify-between">
            <div>Name</div>
            <input
              id="name"
              name="name"
              type="text"
              value={record.name}
              onChange={(e) => handleInputChange(e)}
              placeholder="Jhon"
              className="text-end"
              required={true}
            />
          </div>
  
          {/* Surame */}
          <div className="flex justify-between">
            <div>Surname</div>
            <input
              name="surname"
              type="text"
              value={record.surname}
              onChange={(e) => handleInputChange(e)}
              placeholder="Cowalski"
              className="text-end"
            />
          </div>
  
          {/* Email */}
          <div className="flex justify-between">
            <div>E-mail</div>
            <input
              name="email"
              type="email"
              value={record.email}
              onChange={(e) => handleInputChange(e)}
              placeholder="email@email.com"
              className="text-end"
            />
          </div>
  
          {/* Guests */}
          <div className="flex justify-between">
            <div>
              Guests number
              </div>
                <input
                  name="guests"
                  value={record.guests}
                  type="number"
                  min="1"
                  max="5"
                  onChange={(e) => handleInputChange(e)}
                  placeholder="1"
                  className="text-end"
                />
              </div>
              
              {/* Pets */}
              <div className="flex justify-between">
                <div>Pets number</div>
                <input
                  name="pets"
                  value={record.pets}
                  type="number"
                  min="0"
                  max="2"
                  onChange={(e) => handleInputChange(e)}
                  placeholder="0"
                  className="text-end"
                />
              </div>
            
            {/* Submit */}
            <button
              onClick={addRecordToFireStore}
              className="bg-gray-600 text-white p-2 rounded hover:bg-gray-800"
            >
              Book
            </button>        
        </form>
      </>
    );
  };
  
  export default FormSample;`;

  const apiCodeSample = `import React, { useEffect, useState } from "react";

  const APISample = () => {
  
    const [data, setData] = useState([]);
    
    const [icon, setIcon] = useState("");
    const [description, setDescription] = useState("");
    const [temp, setTemp] = useState("");
    const [humidity, setHumidity] = useState("");
    const [speed, setSpeed] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        await fetch(https://api.openweathermap.org/data/2.5/weather?q= +
        Innsbruck +
        &units=metric&appid=process.env.REACT_APP_API_KEY)
          .then((res) => res.json())
          .then((result) => {
            setData(result);            
            
            setIcon(result.weather[0].icon)
            setTemp(result.main.temp)
            setSpeed(result.wind.speed)
            setHumidity(result.main.humidity)
            setDescription(result.weather[0].description)         
          });
      };
      fetchData();    
    }, []);
  
  
    return (
      <>
        <div className="mx-8 px-8 py-4 flex justify-evenly gap-2 w-fit bg-gray-300/75">
          <div className="w-1/2 pr-4">
            <h3 className="text-2xl">Our weather: </h3>
            <img src={"https://openweathermap.org/img/wn/icon.png} alt="weather-icon" className="text-xl-icon capitalize" />
            <h4 className="">{temp} &deg;C</h4>
          </div>
          <div className="w-1/2 pl-4 min-w-fit">
            <h4 className="text-xl">
              <span className="capitalize">wind: </span>
              {speed} km/h
            </h4>
            <h4 className="text-xl capitalize">
              <span>humidity: </span>
              {humidity} %
            </h4>
            <h4 className="text-xl capitalize">{description}</h4>
          </div>
        </div>
      </>
    );
  };
  
  export default APISample;
  `;

  return (
    <>
      <Moveingtext text="Code Samples" />
      <div className=" grid md:grid-cols-2 md:grid-rows-2 w-full h-full" onScroll={handleScroll}
        id="mainContent">
        <BackBrick
          pageName="Code Samples"
          color="bg-fuchsia-400"
          hoverColor="hover:bg-fuchsia-500"
        />
        {/* Code Version */}
        <div className="border-2 border-black order-2 md:order-1  overflow-x-hidden overflow-y-auto pb-4">
          <div className={toggleNumber === 1 ? "block" : "hidden"}>
            <Header text="Form Code:" />

            <div className="pt-8 h-36">
              <CodeBlock
                text={formCodeSample}
                language="javascript"
                showLineNumbers={true}
                theme={dracula}
                startingLineNumber={1}
                codeBlock={{ lineNumbers: true, wrapLines: true }}
              />
            </div>
          </div>
          <div className={toggleNumber === 2 ? "block" : "hidden"}>
            <Header text="API Code:" />
            <div className="pt-8 h-36">
              <CodeBlock
                text={apiCodeSample}
                language="javascript"
                showLineNumbers={true}
                theme={dracula}
                startingLineNumber={1}
                codeBlock={{ lineNumbers: true, wrapLines: true }}
              />
            </div>
          </div>
          <div className={toggleNumber === 3 ? "block" : "hidden"}>
            <Header text="CRUD Code:" />
          </div>
          <div className={toggleNumber === 4 ? "block" : "hidden"}>
            <Header text="Validation Code:" />
          </div>
          <div className={toggleNumber === 5 ? "block" : "hidden"}>
            <Header text="Code" />
          </div>
          <div className={toggleNumber === 6 ? "block" : "hidden"}>
            <Header text="Code" />
          </div>
        </div>
        <div className="border-2 border-black button-group px-8 md:px-32 py-12  order-1 md:order-2">
          <div className="h-full w-full md:h-1/2 md:w-3/4 mx-auto grid gap-2 md:gap-y-5 grid-cols-2 md:grid-cols-3 grid-flow-dense justify-items-center">
            <button
              className={toggleNumber === 1 ?"w-32 min-w-fit h-12 bg-fuchsia-100 hover:bg-fuchsia-300 ring-4 ring-fuchsia-300 ring-inset font-mono md:px-4 md:py-2" :"w-32 min-w-fit h-12 bg-fuchsia-100 hover:bg-fuchsia-300  font-mono md:px-4 md:py-2"}
              onClick={() => changeToggleNumber(1)}
            >
              Form
            </button>
            <button
              className="w-32 min-w-fit h-12 bg-fuchsia-100 hover:bg-fuchsia-300 focus:ring-4 ring-fuchsia-300 ring-inset font-mono md:px-4 md:py-2"
              onClick={() => changeToggleNumber(2)}
            >
              API
            </button>
            <button
              className="w-32 min-w-fit h-12 bg-fuchsia-100 hover:bg-fuchsia-300 focus:ring-4 ring-fuchsia-300 ring-inset font-mono md:px-4 md:py-2"
              onClick={() => changeToggleNumber(3)}
            >
              CRUD
            </button>
            <button
              className="w-32 min-w-fit h-12 bg-fuchsia-100 hover:bg-fuchsia-300 focus:ring-4 ring-fuchsia-300 ring-inset font-mono md:px-4 md:py-2"
              onClick={() => changeToggleNumber(4)}
            >
              Validation
            </button>
            <button
              className="w-32 min-w-fit h-12 bg-fuchsia-100 hover:bg-fuchsia-300 focus:ring-4 ring-fuchsia-300 ring-inset font-mono md:px-4 md:py-2"
              onClick={() => changeToggleNumber(5)}
            >
              5
            </button>
            <button
              className="w-32 min-w-fit h-12 bg-fuchsia-100 hover:bg-fuchsia-300 focus:ring-4 ring-fuchsia-300 ring-inset font-mono md:px-4 md:py-2"
              onClick={() => changeToggleNumber(6)}
            >
              6
            </button>
          </div>
        </div>

        {/* Live Version */}
        <div className="border-2 border-black order-3 md:order-3 overflow-auto">
          <div className={toggleNumber === 1 ? "block" : "hidden"}>
            <Header text="Form Live: " />
            <div className="py-4 h-fit md:h-12">
              <FormSample />
            </div>
          </div>
          <div className={toggleNumber === 2 ? "block" : "hidden"}>
            <Header text="API Live: " />
            <div className="py-4 h-fit  md:h-12">
              <APISample/>
            </div>
          </div>
          <div className={toggleNumber === 3 ? "block" : "hidden"}>
            <Header text="CRUD Live: " />
          </div>
          <div className={toggleNumber === 4 ? "block" : "hidden"}>
            <Header text="Validation Live: " />
          </div>
          <div className={toggleNumber === 5 ? "block" : "hidden"}>
            <Header text="Live" />
          </div>
          <div className={toggleNumber === 6 ? "block" : "hidden"}>
            <Header text="Live" />
          </div>
        </div>
      </div>
      {visibleButton && <BackArrow color="bg-fuchsia-400" scrollUpFromParent={scrollUp} />}
      <MoveingtextBottom text="Code Samples" />
    </>
  );
};

export default CodeSample;
