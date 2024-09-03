import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { BsCheckCircleFill } from 'react-icons/bs'; // Import the tick icon
import PageHeaderContent from '../../Component/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import './skills.css';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'Java', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks and Libraries',
    skills: ['React', 'Nest', 'Tailwind'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Tools',
    skills: ['Git'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="technical-skills">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: 'translateX(-200px)',
              }}
              end={{
                transform: 'translateX(0)',
              }}
            >
              <h3 className="category_text">{category.category}</h3>
              <ul>
                {category.skills.map((skill, idx) => (
                  <li key={idx}>
                    <BsCheckCircleFill
                      size={15}
                      className="tick-icon"
                      color="#4a90e2"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
