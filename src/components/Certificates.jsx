import React, { useContext } from 'react';
import Titles from './Titles';
import { AppContext } from '../context/AppContext';
import Certificate from './Certificate';

function Certificates() {
  const { certificates } = useContext(AppContext);

  return (
    <div className="w-full flex flex-col items-center gap-6 px-4 py-8">
      <Titles indexValue={2} />

      <div className="certificates w-full flex gap-[2rem] overflow-x-auto py-[0.7rem]">
        {certificates.map((certificate, index) => (
          <Certificate key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}

export default Certificates;