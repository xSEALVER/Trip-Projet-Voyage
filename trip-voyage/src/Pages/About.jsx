import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MainAboutComponents from '../Components/MainAboutComponents';
import SecondAboutComponents from '../Components/SecondAboutComponents';


function About() {
  return (
    <>
        <Navbar/>
        <MainAboutComponents/>
        <SecondAboutComponents/>
        <Footer/>
    </>
  )
}

export default About