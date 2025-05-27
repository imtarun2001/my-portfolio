import React from "react";
import { IoOpenOutline } from "react-icons/io5";

function Project({ project }) {
  return (
    <div className="flex flex-col items-center justify-center gap-[2rem] py-[2rem] px-[1rem] text-white bg-black transition duration-300 rounded-xl text-center shadow-md">
      <div className="w-1/2 text-lg sm:text-xl font-bold uppercase py-[0.5rem] bg-white text-black rounded-xl">
        {project.projectTitle}
      </div>
      <div>
        <img src={project.ui} alt="" />
      </div>
      <div className="flex w-full justify-between items-center">
        <button className="flex justify-center items-center bg-gray-700 hover:bg-gray-400 rounded-xl px-[1rem] py-[0.5rem]">
          <a
            href={project.uiUrl}
            target="_blank"
            className="flex cursor-pointer items-center text-blue-600 hover:underline"
          >
            Live <IoOpenOutline />
          </a>
        </button>
        <button className="flex justify-center items-center bg-gray-700 hover:bg-gray-400 rounded-xl px-[1rem] py-[0.5rem]">
          <a
            href={project.codeUrl}
            target="_blank"
            className="flex cursor-pointer items-center gap-1 text-blue-600 hover:underline"
          >
            Code <IoOpenOutline />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Project;