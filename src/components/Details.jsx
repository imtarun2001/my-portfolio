import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { TypeAnimation } from 'react-type-animation';
import { RiArrowDropDownLine, RiArrowDropRightLine } from 'react-icons/ri';
import { FcGlobe } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function Details() {
  const { details } = useContext(AppContext);
  const [dropdown, setDropdown] = useState(false);

  const motionTransition = {
    type: 'tween',
    duration: 1,
    ease: 'easeInOut',
  };

  return (
    <div className="bg-gradient-to-r from-[#c9f6f9] via-[#1eeef9] to-[#27a1a3] w-full px-4 py-8 flex flex-col items-center gap-8">

      {/* Intro text and profile image */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={motionTransition}
            className="text-lg sm:text-xl font-semibold text-black"
          >
            Hey there, welcome to my portfolio!
          </motion.div>

          <div className="text-2xl sm:text-4xl font-bold text-blue-800">
            I am {details.name}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={motionTransition}
            className="flex items-center gap-2 text-lg sm:text-xl text-emerald-600"
          >
            <FcGlobe className="animate-spin" />
            <span>{details.role}</span>
          </motion.div>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={motionTransition}
          src={details.photo}
          alt="Profile"
          className="w-28 sm:w-40 h-28 sm:h-40 rounded-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

        
      {/* Contact button and dropdown */}
      <div className="w-full flex flex-col items-center gap-4">
        <button
          className="flex items-center gap-2 text-base sm:text-lg bg-black text-white px-4 py-2 rounded-md shadow hover:shadow-lg transition duration-300"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          Contact me {dropdown ? <RiArrowDropRightLine /> : <RiArrowDropDownLine />}
        </button>

        <div
          className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm sm:text-base text-black bg-white rounded-xl shadow-2xl px-6 py-4 transition-opacity duration-700 ${
            dropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-2">
            <MdEmail />
            <span>{details.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <IoCall />
            <span>{details.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot />
            <span>{details.address}</span>
          </div>
        </div>
      </div>


      {/* Summary animation */}
      <div className="w-full min-h-[50px] max-w-3xl text-sm sm:text-base text-black text-center px-2">
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