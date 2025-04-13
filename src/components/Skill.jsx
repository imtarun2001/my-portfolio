import React, { useState } from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

function Skill({skill,index}) {

  const [dropdown,setDropdown] = useState(false);

  return (
    <div className='text-[2.8vw] sm:text-[2.4vw] md:text-[2vw] w-full font-extralight font-sourcecode'>
      <div className='flex justify-between items-center border-b-1 border-b-white cursor-pointer hover:scale-102 hover:font-bold hover:text-orange-500 transition duration-300' onClick={() => setDropdown(!dropdown)}>
        <div>
          {
            skill.skillCategory
          }
        </div>
        <span>
          <IoIosArrowDropdown className='cursor-pointer transition duration-700'/>
        </span>
      </div>
      <div className={`text-[2vw] sm:text[2vw] md:text[1.4vw] flex flex-col justify-center ${index % 2 === 0 ? 'items-end' : 'items-start'} font-extrabold px-10`}>
        {
          dropdown && skill.skills.map((skill,index) => {
            return <div key={index} className='text-orange-500'>{skill}</div>
          })
        }
      </div>
    </div>
  )
}

export default Skill
