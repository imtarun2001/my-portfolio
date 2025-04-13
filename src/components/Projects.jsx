import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Project from './Project';
import Titles from './Titles';


function Projects() {

  const {projects} = useContext(AppContext);

  return (
    <div className='w-full flex flex-col justify-center items-center gap-2.5'>
      
      <Titles indexValue={0}></Titles>

      <div className='text-[3vw] sm:text-[1.5vw] w-[90%] flex flex-col sm:flex-row md:flex-row xl:flex-row justify-start items-center gap-5 sm:items-center sm:overflow-x-scroll'>
        {
          projects.map((project,index) => {
              return <Project key={index} project={project}></Project>
          })
        }
      </div>
    </div>
  )
}

export default Projects
