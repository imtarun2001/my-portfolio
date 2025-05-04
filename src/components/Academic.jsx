import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Titles from './Titles';
import { motion } from 'framer-motion';

function Academic() {
  const { education } = useContext(AppContext);
  const motionTransition = { type: 'spring', duration: 1.5 };

  return (
    <div className="w-full flex flex-col items-center gap-6 px-4 py-8">
      <Titles indexValue={3} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={motionTransition}
        className="flex flex-col items-center justify-center gap-6 bg-black text-white p-6 rounded-lg shadow-lg max-w-lg w-full"
      >
        <img
          src={education.instituteLogo}
          alt={education.instituteName}
          className="h-20 sm:h-24 md:h-28 object-contain"
        />
        <div className="text-xl sm:text-2xl font-semibold">{education.instituteName}</div>
        <div className="text-lg sm:text-xl">{education.degree}</div>
        <div className="text-lg sm:text-xl">{education.cgpa}</div>
        <div className="text-lg sm:text-xl">{education.duration}</div>
        <div className="text-lg sm:text-xl">{education.location}</div>
      </motion.div>
    </div>
  );
}

export default Academic;