import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../Component/pageHeaderContent';


const Project = () => {
  return (
    <section id="project" className="project">
      <PageHeaderContent
        headerText="My Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Project;
