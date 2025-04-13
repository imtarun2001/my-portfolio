import React from 'react'

function Titles({indexValue}) {

    const arrOfTitles = ["Projects I've done","Skills I've acquired","Certified With","My Academic Career"];

  return (
    <div className='text-[4vw] text-gray-400 sm:text-[2.5vw] w-[90%] flex flex-row sm:flex-row justify-start items-center border-b-1 border-b-gray-400 hover:text-white hover:border-b-white'>
        <div className='animate-bounce'>
            {
                arrOfTitles[indexValue]
            }
        </div>
    </div>
  )
}

export default Titles
