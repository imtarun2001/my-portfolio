import React, { useContext } from 'react'
import Titles from './Titles'
import { AppContext } from '../context/AppContext'
import Certificate from './Certificate';

function Certificates() {

    const {certificates} = useContext(AppContext);

  return (
    <div className='w-full flex flex-col justify-center items-center gap-2.5'>
      <Titles indexValue={2}></Titles>

      <div className='w-[85%] flex flex-col sm:flex-row md:flex-row xl:flex-row justify-start items-center gap-5 sm:items-center overflow-x-auto'>
        {
            certificates.map((certificate,index) => {
                return <Certificate key={index} certificate={certificate}></Certificate>
            })
        }
      </div>
    </div>
  )
}

export default Certificates
