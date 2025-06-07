import React from 'react';

function Certificate({ certificate }) {
  return (
    <div className="flex-shrink-0 w-1/2 flex flex-col justify-between items-center gap-4 p-[1rem] rounded-xl border-2 border-purple-500 bg-black">
      <div className="text-xl sm:text-2xl font-pacifico text-purple-500 text-center">
        {certificate.certificateOf}
      </div>
      <img
        src={certificate.certificateUrl}
        alt={certificate.certificateOf}
        className="w-2/3 h-auto drop-shadow-md drop-shadow-purple-500"
      />
      <div className="text-sm sm:text-2xl text-nowrap font-sourcecode font-bold text-gray-500 flex justify-center items-center">
        Certified by:
        <img
          src={certificate.certifiedBy}
          alt="Certification provider"
          className="w-[3rem] sm:w-[7rem] h-auto ml-2 border-2 border-purple-500"
        />
      </div>
    </div>
  );
}

export default Certificate;