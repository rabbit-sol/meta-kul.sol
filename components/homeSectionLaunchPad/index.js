import React from "react";

//Components
import HomeLaunchpadSteps from "../homeLaunchpadSteps";

//Data
import {homeLaunchpadData} from '../data/homeLaunchpad'

const HomeSectionLaunchPad = () => {
  return (
    <div className="mb-36">
      <div className="flex items-center px-12 my-12 sm:my-0 sm:h-screen sm:px-28">
        <div className="bg-[#50C9C3] text-white rounded-xl h-2/5 w-full grid grid-cols-1 sm:h-3/4 sm:grid-cols-2">
          <div className="flex flex-col justify-center pl-8 pt-12 md:pl-44 sm:mt-0">
            <h1 className="text-3xl font-bold w-full pt-28 sm:text-6xl sm:pt-0 sm:w-[200%]">
              Metakul
            </h1>
            <p className="text-md w-fit">
              7777 gurukul land to acquire in Metaverse.
            </p>
          </div>
          <div className="rounded-full bg-white opacity-40 relative left-[-38vw] bottom-96 h-64 w-64 sm:h-96 sm:w-96 sm:left-[-54vw] sm:bottom-28"></div>
        </div>
        <div className="rounded-full bg-white opacity-40 absolute right-0 mt-96 h-48 w-48 sm:h-96 sm:mt-[28rem] sm:w-96"></div>
          </div>
          <h2 className="text-center text-3xl font-bold w-full text-white pt-10 pb-10 sm:text-6xl sm:pt-0 ">ROADMAP</h2>
      <div className="grid grid-cols-1 px-12 lg:grid-cols-4 sm:grid-cols-2 sm:px-28" id="roadmap">
             
              {homeLaunchpadData.map(({ stepNumber, heading, para1, para2, para3, para4 }) => (
                  <HomeLaunchpadSteps key={stepNumber} id={stepNumber} heading={heading} para1={para1} para2={para2} para3={para3} para4={para4} />
      ))}
      </div>
    </div>
  );
};

export default HomeSectionLaunchPad;
