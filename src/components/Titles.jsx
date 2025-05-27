import React from 'react'
import { TfiHandPointRight } from "react-icons/tfi";

function Titles({indexValue}) {

    const arrOfTitles = ["Projects I've done","Skills I've acquired","Certified With","My Academic Career"];

  return (
    <div className='text-[2rem] w-full flex flex-row sm:flex-row justify-start items-center border-b border-b-gray-400 hover:border-b-white'>
        <div className='animate-bounce flex justify-center items-center gap-[0.5rem]'>
            {
              arrOfTitles[indexValue]
            }
            <TfiHandPointRight/>
        </div>
    </div>
  )
}

export default Titles
