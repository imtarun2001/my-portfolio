import React from "react";
import { IoOpenOutline } from "react-icons/io5";

function Project({ project }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white text-gray-800 hover:bg-sky-300 transition duration-300 rounded-xl min-w-[200px] sm:min-w-[250px] max-w-sm text-center shadow-md">
      <div className="w-full text-lg sm:text-xl font-semibold truncate">
        {project.projectTitle}
      </div>
      <a
        href={project.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-blue-600 hover:underline"
      >
        Live <IoOpenOutline />
      </a>
    </div>
  );
}

export default Project;