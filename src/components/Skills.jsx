import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Skill from './Skill';
import Titles from './Titles';

function Skills() {
  const { skills } = useContext(AppContext);

  return (
    <div className="w-full flex flex-col items-center gap-6 px-4 py-8">
      <Titles indexValue={1} />

      <div className="w-full max-w-4xl flex flex-col gap-4">
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Skills;