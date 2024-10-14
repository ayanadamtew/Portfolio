import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import PageHeaderContent from '../../Component/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact"
        icon={<MdOutlineEmail size={40} />}
      />
      <div className="contact_content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: 'translateX(-200px)' }}
          end={{ transform: 'translateX(0px)' }}
          v
        >
          <h3 className="text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: 'translateX(200px)' }}
          end={{ transform: 'translateX(0px)' }}
          v
        >
          <div className="form">
            <div className="controlsWrapper">
              <div>
                <input required name="name" className="inputName" type="text" />
                <label htmlFor="name" className="nameLabel">
                  Name:
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type="text"
                />
                <label htmlFor="name" className="emailLabel">
                  Email:
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="decription"
                  className="inputDescription"
                  type="text"
                  rows={5}
                />
                <label htmlFor="name" className="descriptionLabel">
                  Description:
                </label>
              </div>
            </div>
            <button> Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
