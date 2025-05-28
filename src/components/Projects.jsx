import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Project from './Project';
import Titles from './Titles';

function Projects() {
  const { projects } = useContext(AppContext);

  return (
    <div className="w-full flex flex-col items-center gap-6 px-4 py-8">
      <Titles indexValue={0} />

      <div className="w-full grid grid-cols-1 place-items-center gap-[3rem] sm:gap-[5rem] py-[2rem] overflow-y-scroll">
        {projects.map((project, index) => (
          <Project key={index} project={project}/>
        ))}
      </div>
    </div>
  );
}

export default Projects;