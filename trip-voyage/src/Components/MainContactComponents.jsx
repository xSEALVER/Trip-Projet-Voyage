import React from 'react'
import imageContact from '../assets/coast-img.jpg';


const MainContactComponents = () => {
  return (
    <>
        <>
            <div className="w-100 position-relative">
                <img className="w-100" src={imageContact} alt="img-accueil" />
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <h1 className='text-white text-4xl'>Contact</h1>
                </div>
            </div>
        </>
    </>
  )
}

export default MainContactComponents