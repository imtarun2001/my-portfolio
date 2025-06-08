import React from 'react';
import { useAppContext } from '../context/AppContext';

function Certificate({ certificate }) {

  const {lightmode} = useAppContext();

  return (
    <div className={`flex-shrink-0 w-1/2 flex flex-col justify-between items-center gap-4 p-[1rem] rounded-xl border-2 border-purple-500 ${lightmode ? `bg-white` : `bg-black`}`}>
      <div className="text-xl sm:text-2xl font-pacifico text-purple-700 text-center">
        {certificate.certificateOf}
      </div>
      <img
        src={certificate.certificateUrl}
        alt={certificate.certificateOf}
        className={`w-2/3 h-auto border-2 ${lightmode ? `border-black` : `border-white`}`}
      />
      <div className="text-sm sm:text-2xl text-nowrap font-sourcecode font-bold text-gray-500 flex justify-center items-center">
        Certified by:
        <img
          src={certificate.certifiedBy}
          alt="Certification provider"
          className="w-[3rem] sm:w-[7rem] h-auto ml-2 border-2 sm:border-purple-700 border-l-purple-700 border-y-purple-700"
        />
      </div>
    </div>
  );
}

export default Certificate;