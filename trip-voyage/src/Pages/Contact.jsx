import React from 'react';
import Navbar from '../Components/Navbar';
import MainContactComponents from '../Components/MainContactComponents';
import SecondContactComponents from '../Components/SecondContactComponents';
import Footer from '../Components/Footer';


function Contact() {
  return (
    <>
        <Navbar/>
        <MainContactComponents/>
        <SecondContactComponents/>
        <Footer/>
    </>
  )
}

export default Contact