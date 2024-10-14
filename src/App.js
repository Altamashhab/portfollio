import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Project from './components/Projects/Project';
import About from './components/About/About';
import Technology from './components/Technology/Technology';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import { motion } from 'framer-motion';

function App() {
  
  return (
    <>
    <div>
      <section id='home'><Hero/></section> 
      <section id='about'><About/></section>
      <section id='technology'><Technology/></section>
      <Project/>
      <section id='experience'><Experience/></section>
      <section id='contact'><Contact/></section>
    </div>
    </>
  );
}

export default App;
