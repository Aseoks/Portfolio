import React from "react";

const BackArrow = ({scrollUpFromParent, color, fill}) => {

  

  return (
    <div className={`md:hidden fixed bottom-5 right-8 ${color} h-12 w-12 rounded-full flex justify-center align-middle`}>
      <button onClick={scrollUpFromParent}>
        <div>
          <svg
            width="30"
            height="25"
            viewBox="0 0 30 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0L0.566243 25H29.4338L15 0ZM17.5 76L17.5 22.5H12.5L12.5 76H17.5Z"
              fill={`${fill}`}
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default BackArrow;
