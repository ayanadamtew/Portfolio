import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Component/navBar';

import Home from './Pages/Home/home';
import About from './Pages/About/about';
import Skills from './Pages/Skills/skills';
import Contact from './Pages/Contact/contact';
import Project from './Pages/Projects/project';

function App() {
  return (
    <div className="app">

      <NavBar />
      <div className='main-page'>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
