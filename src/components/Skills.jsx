import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';
const Skills = () => {
  return <section className="py-20 align-element" id="skills">
    <SectionTitle text ='tech Stack' />

    <div className='py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {skills.map((skills) => {
        return <SkillsCard key ={skills.id} {...skills} />
      })}
    </div>
  </section>;
};
export default Skills;
