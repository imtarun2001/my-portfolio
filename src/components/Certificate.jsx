import React from 'react';

function Certificate({ certificate }) {
  return (
    <div className="flex-shrink-0 flex flex-col justify-between items-center gap-4 px-4 py-2 rounded-xl border-2 border-black">
      <div className="text-xl sm:text-2xl font-pacifico text-black text-center">
        {certificate.certificateOf}
      </div>
      <img
        src={certificate.certificateUrl}
        alt={certificate.certificateOf}
        className="w-32 sm:w-48 h-auto my-2 drop-shadow-xl drop-shadow-black"
      />
      <div className="text-xl sm:text-2xl font-sourcecode font-bold text-gray-500 flex justify-center items-center">
        Certified by:
        <img
          src={certificate.certifiedBy}
          alt="Certification provider"
          className="w-16 sm:w-24 h-auto ml-2"
        />
      </div>
    </div>
  );
}

export default Certificate;