import React from 'react'
import imageAbout from '../assets/about-img.jpg';


const MainAboutComponents = () => {
  return (
    <>
        <>
            <div className="w-100 position-relative">
                <img className="w-100" src={imageAbout} alt="img-accueil" />
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <h1 className='text-white text-4xl'>About</h1>
                </div>
            </div>
        </>
    </>
  )
}

export default MainAboutComponents