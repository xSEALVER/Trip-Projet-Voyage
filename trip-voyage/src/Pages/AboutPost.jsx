import React from 'react';
import NavbarPostSign from '../Components/NavbarPostSign';
import MainAboutPostComp from '../Components/MainAboutPostComp';
import SecondAboutPostComp from '../Components/SecondAboutPostComp';
import Footer from '../Components/Footer';


function AboutPost() {
  return (
    <>
        <NavbarPostSign/>
        <MainAboutPostComp/>
        <SecondAboutPostComp/>
        <Footer/>
    </>
  )
}

export default AboutPost