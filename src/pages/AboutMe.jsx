import React, { useState } from "react";
import {
  BackArrow,
  BackBrick,
  Header,
  Moveingtext,
  MoveingtextBottom,
  SkillIcon,
} from "../components";
import { Link } from "react-router-dom";
import WojciechMeck from "../documentsToDownload/WojciechMeck.pdf";

const AboutMe = () => {
  const [visibleButton, setVisibleButton] = useState(false);

  const mainContentDiv = document.getElementById("mainContent");

  const handleScroll = (e) => {
    if (e.target.scrollTop > 10) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  };

  const scrollUp = (e) => {
    mainContentDiv.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Moveingtext text="About Me" />
      <div
        className="h-full grid md:grid-cols-2 md:grid-rows-2 w-full overflow-auto"
        onScroll={handleScroll}
        id="mainContent"
      >
        <BackBrick
          pageName="About Me"
          color="bg-sky-300"
          hoverColor="hover:bg-sky-400"
        />
        <div className="border-2 border-black pb-8">
          <Header text="I`m Wojtek - Junior Web Developer" />
          <p className="font-mono px-8  pt-8">
          I am a graduate Web Developer and an aspiring Frontend Engineer, a subject which I am very passionate about. I am interested in web technologies, and I am continuesly growing my skillset in trending solutions.
          </p>
          <div className="iconsLinks flex px-8 pt-12 gap-5">
            <div className="hover:bg-sky-300 h-fit w-fit rounded-full">
              <Link to="https://github.com/WMeck" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </div>
            <div className="hover:bg-sky-300 h-fit w-fit rounded-full">
              <Link
                to="https://www.linkedin.com/in/wojciechmeck/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-2 border-black pb-8">
          <Header text="My skills:" />
          <div className="px-8 pt-12">
            <div className="flex flex-wrap gap-5 align-baseline">
              <SkillIcon skillName="HTML5" vx="24" path="M19.8803 2H4.11032C3.51032 2 3.05033 2.52 3.12033 3.11L4.92032 19.33C4.96032 19.73 5.25035 20.07 5.64035 20.18L11.7203 21.92C11.9003 21.97 12.0904 21.97 12.2704 21.92L18.3503 20.18C18.7403 20.07 19.0203 19.73 19.0703 19.33L20.8703 3.11C20.9403 2.52 20.4803 2 19.8803 2ZM16.2503 7.5H8.59036L8.92032 10.5H15.7503C15.9603 10.5 16.1603 10.59 16.3103 10.75C16.4503 10.91 16.5203 11.12 16.5003 11.33L16.0003 16.33C15.9703 16.64 15.7604 16.89 15.4604 16.98L11.9604 17.98C11.8904 18 11.8203 18.01 11.7503 18.01C11.6803 18.01 11.6103 18 11.5403 17.98L8.04031 16.98C7.72031 16.89 7.50034 16.59 7.50034 16.26V14.26C7.50034 13.85 7.84034 13.51 8.25034 13.51C8.66034 13.51 9.00034 13.85 9.00034 14.26V15.69L11.7503 16.48L14.5503 15.68L14.9203 12.01H8.25034C7.87034 12.01 7.55034 11.72 7.50034 11.34L7.00034 6.84C6.98034 6.63 7.04034 6.41999 7.19034 6.25999C7.33034 6.09999 7.54034 6.00999 7.75034 6.00999H16.2503C16.6603 6.00999 17.0003 6.34999 17.0003 6.75999C17.0003 7.16999 16.6603 7.5 16.2503 7.5Z"/>
              
              <SkillIcon skillName="CSS3" vx="24" path="M4.19202 3.14294H19.807L18.387 19.1769L11.983 20.9889L5.61402 19.1759L4.19202 3.14294ZM16.9 6.42394L7.10002 6.42194L7.25802 8.37094L14.787 8.37294L14.598 10.3929H9.66002L9.83902 12.3059H14.436L14.164 14.9259L12 15.5239L9.80302 14.9209L9.66202 13.3519H7.72202L7.93802 16.2189L12 17.4839L15.995 16.3469L16.9 6.42394Z"/>
              
              <SkillIcon skillName="JS" vx="32" path="M2 2v28h28v-28zM17.238 23.837c0 2.725-1.6 3.969-3.931 3.969-2.106 0-3.325-1.087-3.95-2.406l2.144-1.294c0.413 0.731 0.788 1.35 1.694 1.35 0.862 0 1.412-0.338 1.412-1.656v-8.944h2.631zM23.462 27.806c-2.444 0-4.025-1.162-4.794-2.688l2.144-1.237c0.563 0.919 1.3 1.6 2.594 1.6 1.087 0 1.788-0.544 1.788-1.3 0-0.9-0.713-1.219-1.919-1.75l-0.656-0.281c-1.9-0.806-3.156-1.825-3.156-3.969 0-1.975 1.506-3.475 3.85-3.475 1.675 0 2.875 0.581 3.738 2.106l-2.050 1.313c-0.45-0.806-0.938-1.125-1.694-1.125-0.768 0-1.256 0.488-1.256 1.125 0 0.788 0.488 1.106 1.619 1.6l0.656 0.281c2.238 0.956 3.494 1.938 3.494 4.137 0 2.363-1.863 3.662-4.357 3.662z"/>
             
             <SkillIcon skillName="Sass CSS" vx="32" path="M15.092 22.146c-0.015 0.030-0.030 0.054 0 0zM27.548 17.796c-1.006-0-1.998 0.23-2.9 0.675-0.295-0.595-0.6-1.115-0.65-1.505-0.060-0.455-0.125-0.725-0.055-1.265s0.385-1.305 0.38-1.36c-0.005-0.055-0.070-0.33-0.715-0.335s-1.2 0.125-1.265 0.295c-0.114 0.311-0.203 0.63-0.265 0.955-0.115 0.585-1.289 2.675-1.954 3.765-0.22-0.425-0.405-0.8-0.445-1.1-0.060-0.455-0.125-0.725-0.055-1.265s0.385-1.305 0.38-1.36c-0.005-0.055-0.070-0.33-0.714-0.335s-1.2 0.125-1.265 0.295c-0.065 0.17-0.135 0.57-0.265 0.955s-1.695 3.865-2.104 4.77c-0.21 0.46-0.39 0.83-0.52 1.080-0.020 0.040-0.035 0.065-0.045 0.085 0.015-0.025 0.025-0.050 0.025-0.040-0.11 0.215-0.175 0.335-0.175 0.335v0.005c-0.085 0.16-0.18 0.305-0.225 0.305-0.030 0-0.095-0.42 0.015-0.995 0.235-1.21 0.79-3.090 0.785-3.155-0.005-0.035 0.105-0.36-0.365-0.535-0.455-0.165-0.62 0.11-0.66 0.11s-0.070 0.1-0.070 0.1c0 0 0.505-2.12-0.97-2.12-0.92 0-2.2 1.010-2.829 1.925-0.395 0.215-1.25 0.68-2.15 1.175-0.345 0.19-0.7 0.385-1.035 0.57-0.025-0.025-0.045-0.050-0.070-0.075-1.79-1.91-5.094-3.26-4.954-5.825 0.050-0.935 0.375-3.39 6.354-6.37 4.9-2.44 8.817-1.77 9.492-0.28 0.97 2.125-2.095 6.080-7.183 6.65-1.94 0.215-2.959-0.535-3.214-0.815-0.265-0.295-0.305-0.31-0.405-0.255-0.165 0.090-0.060 0.35 0 0.505 0.15 0.395 0.775 1.095 1.84 1.445 0.935 0.305 3.209 0.475 5.958-0.59 3.089-1.19 5.494-4.505 4.788-7.28-0.718-2.82-5.394-3.745-9.815-2.175-2.635 0.935-5.484 2.405-7.533 4.32-2.435 2.28-2.824 4.265-2.664 5.095 0.57 2.945 4.629 4.865 6.253 6.285-0.080 0.045-0.155 0.085-0.225 0.125-0.815 0.405-3.909 2.025-4.684 3.735-0.875 1.94 0.145 3.33 0.814 3.52 2.090 0.58 4.229-0.465 5.379-2.18s1.010-3.955 0.48-4.975c-0.005-0.015-0.015-0.025-0.020-0.040 0.21-0.125 0.425-0.25 0.64-0.375 0.415-0.245 0.82-0.47 1.175-0.665-0.2 0.54-0.345 1.19-0.42 2.13-0.090 1.1 0.365 2.525 0.955 3.085 0.26 0.245 0.574 0.25 0.77 0.25 0.69 0 1-0.57 1.345-1.25 0.425-0.83 0.8-1.795 0.8-1.795s-0.47 2.61 0.815 2.61c0.47 0 0.94-0.605 1.15-0.915v0.005c0 0 0.010-0.020 0.035-0.060 0.050-0.075 0.075-0.12 0.075-0.12v-0.015c0.19-0.325 0.605-1.070 1.23-2.3 0.81-1.59 1.584-3.575 1.584-3.575 0.075 0.436 0.179 0.867 0.31 1.29 0.14 0.475 0.435 0.995 0.67 1.5-0.19 0.26-0.305 0.41-0.305 0.41 0 0.004 0.002 0.007 0.005 0.010-0.15 0.2-0.32 0.415-0.495 0.625-0.639 0.76-1.4 1.63-1.5 1.88-0.12 0.295-0.090 0.515 0.14 0.685 0.17 0.13 0.47 0.15 0.785 0.125 0.575-0.040 0.98-0.18 1.175-0.27 0.36-0.129 0.699-0.307 1.010-0.53 0.625-0.46 1.005-1.12 0.97-1.99-0.020-0.48-0.175-0.96-0.365-1.41 0.055-0.080 0.115-0.165 0.17-0.25 0.989-1.445 1.755-3.031 1.755-3.031 0.075 0.436 0.178 0.867 0.31 1.29 0.12 0.405 0.355 0.85 0.57 1.285-0.93 0.755-1.505 1.63-1.704 2.205-0.37 1.065-0.080 1.545 0.465 1.655 0.245 0.050 0.595-0.065 0.855-0.175 0.386-0.129 0.75-0.316 1.079-0.555 0.625-0.46 1.23-1.105 1.189-1.98-0.015-0.395-0.125-0.79-0.27-1.17 0.785-0.33 1.805-0.51 3.105-0.36 2.784 0.325 3.329 2.065 3.224 2.79s-0.69 1.13-0.885 1.25c-0.195 0.12-0.255 0.165-0.24 0.255 0.025 0.13 0.115 0.125 0.28 0.095 0.23-0.040 1.46-0.59 1.515-1.935 0.080-1.7-1.555-3.57-4.45-3.555zM6.089 25.031c-0.92 1.005-2.209 1.385-2.764 1.065-0.595-0.346-0.36-1.825 0.774-2.896 0.69-0.65 1.58-1.25 2.17-1.62 0.135-0.080 0.33-0.2 0.57-0.345 0.040-0.025 0.060-0.035 0.060-0.035 0.045-0.030 0.095-0.055 0.145-0.085 0.414 1.52 0.015 2.86-0.955 3.915zM12.807 20.461c-0.32 0.785-0.994 2.785-1.405 2.68-0.35-0.090-0.565-1.615-0.070-3.115 0.25-0.755 0.78-1.655 1.095-2.005 0.505-0.565 1.060-0.745 1.19-0.52 0.175 0.295-0.61 2.47-0.81 2.96zM18.357 23.111c-0.135 0.070-0.26 0.115-0.32 0.080-0.045-0.025 0.055-0.12 0.055-0.12s0.695-0.745 0.97-1.085c0.16-0.2 0.345-0.435 0.545-0.695 0 0.025 0.005 0.050 0.005 0.080-0.006 0.895-0.866 1.5-1.256 1.74zM22.637 22.136c-0.1-0.070-0.085-0.305 0.25-1.035 0.13-0.285 0.43-0.765 0.95-1.225 0.059 0.174 0.091 0.356 0.095 0.54-0.005 1.125-0.81 1.545-1.295 1.72z" />
            
            <SkillIcon skillName="Tailwind CSS" vx="24" path="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"/>
             
             <SkillIcon skillName="jQuery" vx="32" path="M2.047 7.833c-2.833 4.068-2.479 9.354-0.318 13.672 0.052 0.109 0.104 0.208 0.156 0.307 0.031 0.068 0.068 0.135 0.104 0.198 0.016 0.036 0.042 0.078 0.063 0.109 0.036 0.073 0.073 0.135 0.109 0.203l0.208 0.354c0.036 0.068 0.078 0.13 0.12 0.193 0.073 0.125 0.161 0.25 0.234 0.375 0.036 0.052 0.068 0.104 0.104 0.156 0.13 0.203 0.271 0.401 0.417 0.594 0.104 0.141 0.208 0.281 0.318 0.422 0.036 0.047 0.078 0.099 0.115 0.151l0.297 0.359c0.036 0.042 0.068 0.089 0.109 0.13 0.13 0.156 0.271 0.313 0.406 0.464 0 0.005 0.005 0.005 0.005 0.010 0.172 0.214 0.359 0.411 0.568 0.589 0.109 0.109 0.214 0.219 0.328 0.323l0.135 0.13c0.146 0.141 0.292 0.276 0.448 0.411 0.005 0 0.005 0 0.010 0.005l0.073 0.063c0.135 0.12 0.276 0.24 0.417 0.349l0.167 0.141c0.109 0.089 0.229 0.177 0.344 0.266l0.182 0.141c0.125 0.094 0.255 0.182 0.38 0.276 0.047 0.031 0.094 0.068 0.146 0.094l0.036 0.031 0.375 0.25 0.161 0.104c0.193 0.125 0.391 0.245 0.583 0.365 0.057 0.026 0.109 0.057 0.161 0.089 0.146 0.083 0.297 0.167 0.443 0.245 0.078 0.047 0.161 0.083 0.245 0.125 0.099 0.057 0.203 0.109 0.307 0.167 0.026 0.005 0.052 0.016 0.078 0.031 0.042 0.021 0.083 0.042 0.125 0.063 0.161 0.078 0.328 0.156 0.5 0.229 0.031 0.016 0.068 0.026 0.104 0.047 0.193 0.083 0.38 0.167 0.583 0.245 0.042 0.010 0.089 0.036 0.135 0.052 0.182 0.068 0.37 0.135 0.552 0.203l0.063 0.021c0.208 0.073 0.406 0.135 0.615 0.203 0.047 0.010 0.099 0.031 0.146 0.042 0.214 0.068 0.417 0.141 0.63 0.182 13.682 2.495 17.656-8.224 17.656-8.224-3.339 4.349-9.266 5.495-14.88 4.219-0.208-0.047-0.411-0.115-0.625-0.177-0.25-0.073-0.505-0.156-0.755-0.24l-0.083-0.031c-0.177-0.063-0.354-0.13-0.531-0.198-0.047-0.021-0.099-0.036-0.146-0.057-0.198-0.078-0.385-0.156-0.578-0.24-0.042-0.016-0.073-0.036-0.115-0.052-0.161-0.073-0.323-0.146-0.484-0.224-0.047-0.021-0.094-0.047-0.141-0.073-0.125-0.057-0.25-0.125-0.375-0.188-0.083-0.042-0.167-0.083-0.245-0.125-0.151-0.083-0.302-0.167-0.453-0.25-0.047-0.031-0.099-0.063-0.151-0.089-0.198-0.12-0.391-0.24-0.583-0.359-0.052-0.031-0.104-0.068-0.156-0.104-0.141-0.089-0.281-0.182-0.417-0.276-0.047-0.031-0.089-0.063-0.135-0.099-0.135-0.089-0.266-0.182-0.396-0.281-0.057-0.047-0.115-0.089-0.177-0.135-0.115-0.089-0.234-0.177-0.349-0.276l-0.161-0.125c-0.151-0.12-0.297-0.245-0.443-0.375-0.016-0.016-0.031-0.026-0.052-0.042l-0.458-0.417-0.135-0.125c-0.109-0.115-0.219-0.219-0.333-0.328l-0.13-0.135c-0.141-0.141-0.276-0.281-0.411-0.432l-0.021-0.021c-0.141-0.151-0.276-0.313-0.417-0.469-0.036-0.042-0.068-0.089-0.104-0.13l-0.302-0.37c-0.156-0.198-0.307-0.396-0.453-0.599-3.115-4.25-4.24-10.115-1.75-14.927zM10.828 4.406c-2.052 2.948-1.938 6.885-0.339 10 0.266 0.521 0.568 1.026 0.901 1.51 0.307 0.438 0.646 0.958 1.057 1.313 0.141 0.161 0.297 0.318 0.458 0.479l0.12 0.12c0.151 0.146 0.307 0.292 0.469 0.432l0.021 0.021c0.177 0.156 0.359 0.307 0.552 0.453 0.042 0.031 0.083 0.068 0.125 0.099 0.188 0.141 0.375 0.281 0.568 0.417l0.021 0.016c0.083 0.057 0.172 0.115 0.266 0.172 0.036 0.026 0.078 0.057 0.12 0.078 0.141 0.094 0.281 0.177 0.422 0.266 0.026 0.010 0.042 0.021 0.063 0.031 0.12 0.073 0.255 0.141 0.38 0.208 0.042 0.026 0.083 0.047 0.13 0.073 0.089 0.042 0.177 0.089 0.26 0.135l0.047 0.016c0.177 0.089 0.359 0.172 0.542 0.255 0.047 0.016 0.083 0.031 0.125 0.052 0.146 0.063 0.297 0.125 0.443 0.182 0.068 0.021 0.13 0.047 0.193 0.068 0.135 0.052 0.281 0.099 0.417 0.146l0.182 0.057c0.198 0.063 0.396 0.141 0.599 0.172 10.563 1.75 13.005-6.38 13.005-6.38-2.203 3.167-6.458 4.677-11 3.5-0.203-0.052-0.401-0.115-0.599-0.177-0.063-0.016-0.12-0.036-0.182-0.052-0.135-0.052-0.281-0.099-0.411-0.146l-0.193-0.073c-0.151-0.063-0.302-0.115-0.448-0.182-0.047-0.021-0.089-0.031-0.12-0.052-0.188-0.083-0.375-0.167-0.557-0.255l-0.276-0.146-0.156-0.078c-0.125-0.063-0.24-0.13-0.354-0.198-0.031-0.016-0.057-0.031-0.083-0.047-0.141-0.089-0.286-0.172-0.422-0.266-0.047-0.026-0.089-0.052-0.13-0.083l-0.276-0.177c-0.193-0.135-0.38-0.281-0.573-0.417-0.042-0.042-0.083-0.073-0.125-0.104-1.995-1.573-3.568-3.719-4.318-6.146-0.786-2.526-0.609-5.359 0.745-7.656zM18.214 1.844c-1.208 1.776-1.328 3.984-0.495 5.943 0.885 2.078 2.698 3.714 4.807 4.484 0.089 0.036 0.172 0.063 0.26 0.094l0.115 0.036c0.125 0.036 0.25 0.083 0.375 0.115 5.833 1.125 7.411-3 7.839-3.604-1.391 1.995-3.719 2.474-6.578 1.781-0.229-0.063-0.458-0.13-0.688-0.214-0.276-0.099-0.552-0.214-0.823-0.339-0.505-0.25-0.99-0.542-1.438-0.88-2.563-1.943-4.146-5.641-2.474-8.656z" />
             

             <SkillIcon skillName="ReactJS" vx="32" path="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z"/>
              
              <SkillIcon skillName="Firebase" vx="32" path="M5.188 20.896l3.151-20.281c0.104-0.688 1.031-0.844 1.354-0.229l3.391 6.359zM27.578 25.818l-3-18.667c-0.099-0.578-0.807-0.802-1.224-0.391l-18.932 19.057 10.474 5.906c0.656 0.37 1.458 0.37 2.115 0zM19.068 9.531l-2.427-4.646c-0.271-0.516-1.010-0.516-1.281 0l-10.651 19.094z" />
              
            </div>
          </div>
        </div>
        <div className="border-2 border-black pb-8">
          <Header text="My Documents:" />
          <div className="flex gap-5 px-8 pt-12">
            <div>
              <a
                href={WojciechMeck}
                download="WojciechMeckCV"
                target="_blank"
                rel="noreferrer"
              >
                <button className="flex flex-col items-center hover:cursor-pointer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.819 14.427c.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12h.496c.474 0 .803.173.916.644zm3.091-8.65c2.047-.479 4.805.279 6.09 1.179-1.494-1.997-5.23-5.708-7.432-6.882 1.157 1.168 1.563 4.235 1.342 5.703zm-7.457 7.955h-.546v.943h.546c.235 0 .467-.027.576-.227.067-.123.067-.366 0-.489-.109-.198-.341-.227-.576-.227zm13.547-2.732v13h-20v-24h8.409c4.858 0 3.334 8 3.334 8 3.011-.745 8.257-.42 8.257 3zm-12.108 2.761c-.16-.484-.606-.761-1.224-.761h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.094-.292.094-.597 0-.885zm3.407-.303c-.297-.299-.711-.458-1.199-.458h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.554-.659.586-2.035-.063-2.693zm3.701-.458h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784z" />
                  </svg>
                  <p className="font-mono pt-2">CV</p>
                </button>
              </a>
            </div>
            <a
              href={WojciechMeck}
              download="WojciechMeckCoverLetter"
              target="_blank"
              rel="noreferrer"
            >
              <button className="flex flex-col items-center hover:cursor-pointer b">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.819 14.427c.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12h.496c.474 0 .803.173.916.644zm3.091-8.65c2.047-.479 4.805.279 6.09 1.179-1.494-1.997-5.23-5.708-7.432-6.882 1.157 1.168 1.563 4.235 1.342 5.703zm-7.457 7.955h-.546v.943h.546c.235 0 .467-.027.576-.227.067-.123.067-.366 0-.489-.109-.198-.341-.227-.576-.227zm13.547-2.732v13h-20v-24h8.409c4.858 0 3.334 8 3.334 8 3.011-.745 8.257-.42 8.257 3zm-12.108 2.761c-.16-.484-.606-.761-1.224-.761h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.094-.292.094-.597 0-.885zm3.407-.303c-.297-.299-.711-.458-1.199-.458h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.554-.659.586-2.035-.063-2.693zm3.701-.458h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784z" />
                </svg>
                <p className="font-mono pt-2">Cover Letter</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      {visibleButton && (
        <BackArrow color="bg-sky-300" fill="black" scrollUpFromParent={scrollUp} />
      )}
      <MoveingtextBottom text="About Me" />
    </>
  );
};

export default AboutMe;
