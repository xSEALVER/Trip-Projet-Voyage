import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import MainHomeComponents from '../Components/MainHomeComponents';
import News from '../Components/News';
import Prefooter from '../Components/Prefooter';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <MainHomeComponents/>
        <Prefooter/>
        <News/>
        <Footer/>
    </>
  )
}

export default Home