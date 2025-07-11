import { useAppContext } from '../context/AppContext';
import Skill from './Skill';
import Titles from './Titles';

function Skills() {
  const { myskills } = useAppContext();

  return (
    <div className="skills w-full flex flex-col items-center gap-6 px-4 py-8">
      <Titles indexValue={1} />

      <div className="w-full max-w-4xl flex flex-col gap-4">
        {myskills.map((myskill, index) => (
          <Skill key={index} myskill={myskill} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Skills;