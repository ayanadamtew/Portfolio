import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../Component/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import { Value } from 'sass';
import './about.css';
import { DiAndroid, DiJava } from 'react-icons/di';
import { FaDatabase, FaDev } from 'react-icons/fa';

const PersonalDetails = [
  {
    label: 'Name',
    Value: 'Ayana Damtew',
  },
  {
    label: 'Age',
    Value: '22',
  },
  {
    label: 'Address',
    Value: 'Oromia, Ethiopia',
  },
  {
    label: 'Email',
    Value: 'ayanadamtew@gmail.com',
  },
  {
    label: 'contact',
    Value: '+251973395537',
  },
];

const AboutMe =
  " I'm a Software Engineering student at Jimma Institute of Technology with a strong foundation in web and mobile development.I hold certificates in mobile app development, data science, and programming languages, enhancing my skills for real-world challenges. My passion for math and problem-solving drives me to excel in complex algorithms and debugging code. Outside academics, I enjoy watching football and playing video games to stay balanced and energized. My goal is to continually grow as a developer and contribute to impactful projects in the tech industry.";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="personallWrapper">
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{ transform: 'translateX(-900px)' }}
            end={{ transform: 'translateX(0px)' }}
          >
            <h3>Software Developer</h3>
            <p>{AboutMe}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{ transform: 'translateX(500px)' }}
            end={{ transform: 'translateX(0px)' }}
          >
            <h3 className="personalInformationText">Personal Information</h3>
            <ul>
              {PersonalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.Value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="serviceWrapper">
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{ transform: 'translateX(600px)' }}
            end={{ transform: 'translateX(0px)' }}
          >
            <div className="innerContent">
              <div>
                <FaDev size={50} color="#4a90e2" />
              </div>
              <div>
                <DiAndroid size={50} color="#4a90e2" />
              </div>
              <div>
                <DiJava size={50} color="#4a90e2" />
              </div>
              <div>
                <FaDatabase size={50} color="#4a90e2" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
