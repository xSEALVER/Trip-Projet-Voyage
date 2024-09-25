import React from 'react';
import Navbar from '../Components/Navbar';
import MainServicesComponents from '../Components/MainServicesComponents';
import Prefooter from '../Components/Prefooter';
import Footer from '../Components/Footer';


function Home() {
  return (
    <>
        <Navbar/>
        <MainServicesComponents/>
        <Prefooter/>
        <Footer/>
    </>
  )
}

export default Home