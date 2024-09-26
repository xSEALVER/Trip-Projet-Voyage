import React from 'react';
import NavbarPostSign from '../Components/NavbarPostSign';
import MainContactPostComp from '../Components/MainContactPostComp';
import SecondContactPostComp from '../Components/SecondContactPostComp';
import Footer from '../Components/Footer';


function ContactPost() {
  return (
    <>
        <NavbarPostSign/>
        <MainContactPostComp/>
        <SecondContactPostComp/>
        <Footer/>
    </>
  )
}

export default ContactPost