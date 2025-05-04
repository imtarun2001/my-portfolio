import React, { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

function Skill({ skill, index }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="w-full font-sourcecode text-base sm:text-lg md:text-xl">
      <div
        className="flex justify-between items-center border-b border-white cursor-pointer hover:scale-105 hover:text-orange-600 hover:font-bold transition duration-300"
        onClick={() => setDropdown(!dropdown)}
      >
        <div>{skill.skillCategory}</div>
        <IoIosArrowDropdown
          className={`transform transition-transform duration-500 ${dropdown ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {dropdown && (
        <div className={`flex flex-col px-6 py-2 ${index % 2 === 0 ? 'items-end' : 'items-start'}`}>
          {skill.skills.map((item, idx) => (
            <div key={idx} className="text-orange-600 font-semibold text-sm sm:text-base">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Skill;