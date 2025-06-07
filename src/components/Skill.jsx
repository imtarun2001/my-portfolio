import React, { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { motion } from 'framer-motion';



function Skill({ myskill, index }) {
  const [dropdown, setDropdown] = useState(false);
  const transition = {type: 'normal',duration: 1};

  return (
    <div className="w-full font-sourcecode text-base sm:text-lg md:text-xl">
      <div
        className="flex justify-between items-center border-b border-white cursor-pointer hover:text-purple-600 hover:font-bold"
        onClick={() => setDropdown(!dropdown)}
      >
        <div className='text-[1.7rem]'>{myskill.skillCategory}</div>
        <IoIosArrowDropdown
          className={`transform transition-transform duration-500 ${dropdown ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {dropdown && (
        <motion.div initial={index % 2 === 0 ? {opacity:0, x:100} : {opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={transition} className={`flex flex-col justify-center py-2 ${index % 2 === 0 ? 'items-end' : 'items-start'}`}>
          {myskill.skills.map((skill, index) => (
            <div key={index} className="font-semibold text-[1.4rem] flex justify-center items-center gap-[0.5rem]">
              <span style={{color: skill.color}}>{skill.icon}</span><span>{skill.skill}</span>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default Skill;