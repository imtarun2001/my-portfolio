import React,{ useState } from "react";

import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoOpenOutline } from "react-icons/io5";

function Project({project}) {

    const [dropdown,setDropdown] = useState(false);

  return (
    <div className='flex flex-col justify-between items-center bg-purple-700 hover:bg-sky-400 cursor-pointer p-1.5 sm:px-12 sm:py-6 hover:scale-110 rounded-xl' onClick={() => setDropdown(!dropdown)}>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {
            project.projectTitle
        }
        <span>
            {
                dropdown ? <IoMdArrowDropdown/> : <IoMdArrowDropright/>
            }
        </span>
      </div>
      <div className="hover:text-blue-600">
        {
            dropdown && <a href={project.projectUrl} target="_blank" className="flex justify-between items-center">View <IoOpenOutline /></a>
        }
      </div>
    </div>
  )
}

export default Project
