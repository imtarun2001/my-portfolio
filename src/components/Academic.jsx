import React, { useContext,useState } from 'react'
import { AppContext } from '../context/AppContext'
import Titles from './Titles';

function Academic() {

    const {education} = useContext(AppContext);

  return (
    <div className='w-full text-[2.5vw] sm:text-[2vw] flex flex-col justify-center items-center gap-4'>
        <Titles indexValue={3}></Titles>
        <div className='transition-transform duration-700 ease-in-out origin-top'>
        <div className='flex flex-col justify-center items-center outline-4 outline-green-500 bg-gradient-to-br from-cyan-700 via-teal-800 to-blue-700 p-1.5 rounded-sm text-white'>
                    <img src={education.instituteLogo} alt="" className='h-28'/>
                <div>
                    {
                        education.instituteName
                    }
                </div>
                <div>
                    {
                        education.degree
                    }
                </div>
                <div>
                    {
                        education.cgpa
                    }
                </div>
                <div>
                    {
                        education.duration
                    }
                </div>
                <div>
                    {
                        education.location
                    }
                </div>
        </div>
        </div>
    </div>
  )
}

export default Academic
