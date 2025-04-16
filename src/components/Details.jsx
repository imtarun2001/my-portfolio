// import React, { useState } from 'react'
// import { useContext } from "react"
// import { AppContext } from "../context/AppContext"
// import { TypeAnimation } from 'react-type-animation';

// import { RiArrowDropDownLine } from "react-icons/ri";
// import { RiArrowDropRightLine } from "react-icons/ri";
// import { FcGlobe } from "react-icons/fc";
// import { MdCake } from "react-icons/md";
// import { MdEmail } from "react-icons/md";
// import { IoCall } from "react-icons/io5";
// import { FaLocationDot } from "react-icons/fa6";

// function Details() {

//     const {details} = useContext(AppContext);
//     const [dropdown,setDropdown] = useState(false);

//   return (
//     <div className="bg-sky-700 text-rose-50 flex flex-col justify-around items-start gap-2.5 w-full p-1">

//         <div className='w-full flex flex-col justify-end items-center p-1.5'>
//                 <div className='w-full flex justify-end items-center'>
//                     <button className='flex justify-between items-center text-[2.5vw] sm:text-[1.5vw]' onMouseEnter={() => setDropdown(!dropdown)} onMouseLeave={() => setDropdown(!dropdown)}>About me {dropdown ? <RiArrowDropDownLine/> : <RiArrowDropRightLine/>}</button>
//                 </div>

//             <div className={`w-full text-[2.5vw] sm:text-[1.5vw] font-montserrat flex flex-col justify-between items-center sm:flex-row sm:justify-center sm:items-center sm:gap-5 xl:justify-around text-sky-700 sm:bg-black p-2.5 transition-all duration-1000 ease-in-out ${dropdown ? "visible" : "hidden"}`}>

//                     <div className="flex justify-start items-center">
//                             <MdEmail />
//                             <span>
//                                 {
//                                     details.email
//                                 }
//                             </span>
//                     </div>

//                     <div className="flex justify-start items-center">
//                             <IoCall />
//                             <span>
//                                 {
//                                     details.phone
//                                 }
//                             </span>
//                     </div>

//                     <div className="flex justify-start items-center">
//                             <FaLocationDot />
//                             <span>
//                                 {
//                                     details.address
//                                 }
//                             </span>
//                     </div>

//                     <div className="flex justify-center items-center">
//                             <MdCake />
//                             <span>
//                                 {
//                                     details.dob
//                                 }
//                             </span>
//                     </div>

//                 </div>
//         </div>

//         <div className='w-full flex flex-col justify-between items-center sm:flex-row sm:justify-center sm:gap-10 xl:justify-around'>
//             <div className='flex flex-col justify-center items-center'>
//                 <div className='text-[2.6vw] font-montserrat text-black animate-pulse'>
//                     Hey There Welcome to My Portfolio !!
//                 </div>
//                 <div className="text-[5vw] font-montserrat">
//                     <span>I am </span>
//                     {
//                         details.name
//                     }
//                 </div>
//                 <div className="flex justify-start items-center text-[2.4vw] text-gray-700 font-montserrat">
//                     <span>
//                         {
//                             details.role
//                         }
//                     </span>&nbsp;
//                     <FcGlobe className='animate-bounce'/>
//                 </div>

//             </div>
            
            
//             <img src={details.photo} alt="" className='h-15 w-15 sm:h-25 sm:w-25 md:h-30 md:w-30 rounded-[50%] hover:scale-150' />



//         </div>

//         <div className="text-[1.3vw] sm:text-[1vw] font-montserrat min-w-full sm:w-[70%] text-center">
//             <TypeAnimation
//                 sequence={[
//                     details.summary,
//                     2000,
//                     '',
//                     2000
//                 ]}
//                 repeat={Infinity}
//                 wrapper="span"
//             />
//         </div>
        
//     </div>
//   )
// }

// export default Details



import React, { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { TypeAnimation } from 'react-type-animation';

import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { FcGlobe } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';

function Details() {
  const { details } = useContext(AppContext);
  const [dropdown, setDropdown] = useState(false);

  return (
    // <div className="bg-gradient-to-t from-green-600 via-gray-200 to-orange-600 text-rose-50 flex flex-col justify-around items-start gap-2.5 w-full p-1">
    <div className="bg-gradient-to-r from-[#c9f6f9] via-[#1eeef9] to-[#27a1a3] text-rose-50 flex flex-col justify-around items-start gap-2.5 w-full p-1">
      <div className="w-full flex flex-col justify-end items-center p-1.5">
        <div className="w-full flex justify-start items-center">
        <button
          className="flex justify-between items-center text-[2.5vw] sm:text-[1.5vw] text-white bg-gradient-to-br from-green-400 via-emerald-300 to-gray-600 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 px-4 py-2 focus:outline-none"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          Contact me {dropdown ? <RiArrowDropDownLine /> : <RiArrowDropRightLine />}
        </button>
        </div>

        <div
          className={`w-full text-[2.5vw] sm:text-[1.5vw] font-montserrat rounded-xl flex flex-col justify-between items-center sm:flex-row sm:justify-center sm:items-center sm:gap-5 xl:justify-around text-zinc-500 text-shadow-2xs text-shadow-black sm:bg-white shadow-2xl shadow-black p-2.5 transition-all duration-1000 ease-in-out ${
            dropdown ? 'scale-100' : 'scale-0'
          }`}
        >
          <div className="flex justify-start items-center">
            <MdEmail />
            <span>{details.email}</span>
          </div>

          <div className="flex justify-start items-center">
            <IoCall />
            <span>{details.phone}</span>
          </div>

          <div className="flex justify-start items-center">
            <FaLocationDot />
            <span>{details.address}</span>
          </div>

        </div>
      </div>

      <div className="w-full flex flex-col justify-between items-center sm:flex-row sm:justify-center sm:gap-10 xl:justify-around">
        <div className="flex flex-col justify-center items-center">
          <div className="text-[2.6vw] font-montserrat text-black animate-pulse">
            Hey there, welcome to my portfolio!
          </div>
          <div className="text-blue-800 text-[5vw] font-montserrat">
            <span>I am </span>
            {details.name}
          </div>
          <div className="flex justify-start items-center text-[2.4vw] text-emerald-600 font-montserrat">
            <FcGlobe className="animate-spin" />&nbsp;
            <span>{details.role}</span>
          </div>
        </div>

          <img
            src={details.photo}
            alt=""
            className='h-[11vw] w=[11vw] rounded-[50%] hover:scale-130 transition duration-1000'
          />
      </div>

      <div className="text-[1.3vw] sm:text-[1vw] font-montserrat min-w-full sm:w-[70%] text-black text-center">
        <TypeAnimation
          sequence={[details.summary, 2000, '', 2000]}
          repeat={Infinity}
          wrapper="span"
        />
      </div>
    </div>
  );
}

export default Details;