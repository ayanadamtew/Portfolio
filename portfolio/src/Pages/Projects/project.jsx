import React from 'react';
import { BsFolderFill } from 'react-icons/bs';
import PageHeaderContent from '../../Component/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import './project.css'
import image1 from './project1.png'
import image2 from './project2.png'
import image3 from './project3.png'

const projects = [
  {
    title: "Jimma Coffee Express",
    description: "This project is a website called 'Jimma Coffee Express.' The website is built using HTML, CSS, and PHP. It allows users to purchase coffee from Jimma and have it delivered to various cities across Ethiopia.",
    technologies: ["HTML", "CSS", "PHP", "Javascript"],
    link: "https://github.com/ayanadamtew/Jimma-Coffee-Express.git",
    image: image1
  },
  {
    title: " Online Birth Certificate System",
    description: "The Online Birth Certificate System (OBCS) is a PHP-based web application that automates the process of applying for and managing birth certificates.",
    technologies: ["HTML", "CSS", "Javascript", "PHP"],
    link: "https://github.com/ayanadamtew/Online-birth-certificate-system.git",
    image: image2
  },
  {
    title: "PicShare",
    description: "Picshare is an easy-to-use platform for sharing images, developed with React, HTML, and Tailwind CSS, where users can seamlessly upload and share their photos after signing in with their Google account, providing a secure and enjoyable experience for all.",
    technologies: ["React", "TailWind", "HTML"],
    link: "https://github.com/ayanadamtew/PicShare.git",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "AyuMovies",
    description: "This is my movie website, developed using React.js. It features a fully responsive design, ensuring it looks great on any device. Additionally, it’s user-friendly, providing an intuitive and seamless experience for all visitors.",
    technologies: ["React", "css", "HTML"],
    link: "https://github.com/ayanadamtew/ayuMovie.git",
    image: image3
  },
  // Add more projects as needed
];

const Project = () => {
  return (
    <section id="projects" className="projects">
      <PageHeaderContent
        headerText="Projects"
        icon={<BsFolderFill size={40} />}
      />
      <div className="projects_content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: 'translateX(-200px)' }}
          end={{ transform: 'translateX(0px)' }}
        >
          <h3 className="text">My Work</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: 'translateX(200px)' }}
          end={{ transform: 'translateX(0px)' }}
        >
          <div className="projects_grid">
            {projects.map((project, index) => (
              <div key={index} className="project_card">
                <div className="project_image_container">
                  <img src={project.image} alt={project.title} className="project_image" />
                </div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech_tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project_link">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Project;