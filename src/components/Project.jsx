import React from "react";
import { IoOpenOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function Project({ project }) {

  const transition = {type: 'normal',duration: 1.5};

  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={transition} className="flex flex-col items-center justify-center gap-[2rem] py-[2rem] px-[1rem] text-white bg-purple-900 transition duration-300 rounded-xl text-center shadow-md">
      <div className="w-1/2 text-[1rem] sm:text-[1.5rem] font-bold uppercase py-[0.5rem] bg-black rounded-xl">
        {project.projectTitle}
      </div>
      <div>
          <a
            href={project.uiUrl}
            target="_blank"
          >
            <img src={project.ui} alt="" />
          </a>        
      </div>
      <div className="flex w-full justify-between items-center text-black ">
          <a
            href={project.uiUrl}
            target="_blank"
            className="flex cursor-pointer justify-center items-center hover:underline hover:text-black border-2 border-black bg-white hover:bg-transparent rounded-xl px-[1rem] py-[0.5rem]"
          >
            Live <IoOpenOutline />
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            className="flex cursor-pointer justify-center items-center hover:underline hover:text-black border-2 border-black bg-white hover:bg-transparent rounded-xl px-[1rem] py-[0.5rem]"
          >
            Code <IoOpenOutline />
          </a>
      </div>
    </motion.div>
  );
}

export default Project;