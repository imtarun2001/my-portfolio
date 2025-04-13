import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Skill from './Skill';
import Titles from './Titles';

function Skills() {

    const {skills} = useContext(AppContext);

  return (
    <div className='w-full flex flex-col justify-center items-center gap-2.5'>

        <Titles indexValue={1}></Titles>

        <div className='w-[85%] flex flex-col gap-2'>
            {
                skills.map((skill,index) => {
                    return <Skill key={index} skill={skill} index={index}></Skill>
                })
            }
        </div>
    </div>
  )
}

export default Skills
