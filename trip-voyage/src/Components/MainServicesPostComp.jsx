import React from 'react'
import imageServices from '../assets/plage-img.jpg';


const MainServicesPostComp = () => {
  return (
    <>
        <>
            <div className="w-100 position-relative">
                <img className="w-100" src={imageServices} alt="img-accueil" />
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <h1 className='text-white text-4xl'>Services</h1>
                </div>
            </div>
        </>
    </>
  )
}

export default MainServicesPostComp