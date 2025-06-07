import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Titles from './Titles';
import { motion } from 'framer-motion';

function Academic() {
  const { education } = useContext(AppContext);
  const motionTransition = { type: 'spring', duration: 1.5 };

  return (
    <div className="academic w-full flex flex-col justify-center items-center gap-6 sm:px-4 py-8">
      <Titles indexValue={3} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={motionTransition}
        className="flex flex-col items-center justify-center gap-6 bg-white text-black drop-shadow-lg drop-shadow-black p-6 rounded-lg shadow-lg md:w-2/3 w-full"
      >
        <img
          src={education.instituteLogo}
          alt={education.instituteName}
          className="h-20 sm:h-24 md:h-28 object-contain"
        />
        <img src={education.instituteImage} alt="" />
        <div className="text-xs sm:text-2xl text-center">{education.instituteName}</div>
        <div className="text-xs sm:text-xl text-center">{education.degree}</div>
        <div className="text-xs sm:text-xl text-center">{education.cgpa}</div>
        <div className="text-xs sm:text-xl text-center">{education.duration}</div>
        <div className="text-xs sm:text-xl text-center">{education.location}</div>
      </motion.div>
    </div>
  );
}

export default Academic;