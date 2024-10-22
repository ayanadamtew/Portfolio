import React from 'react';
import myPhoto from './myphoto.jpg';
import './home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="text-wrapper">
          <h1>
            Hello, I'm Ayana Damtew
            <br />
            I am Software Developer
          </h1>
        </div>
        <div className="image-wrapper">
          <img src={myPhoto} alt="Ayana Damtew" />
        </div>
      </div>
    </section>
  );
};

export default Home;
