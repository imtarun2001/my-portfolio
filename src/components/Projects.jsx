import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Project from './Project';
import Titles from './Titles';

function Projects() {
  const { projects } = useContext(AppContext);

  return (
    <div className="w-full flex flex-col items-center gap-6 px-4 py-8">
      <Titles indexValue={0} />

      <div className="w-full max-w-7xl flex gap-4 overflow-x-scroll py-6">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;