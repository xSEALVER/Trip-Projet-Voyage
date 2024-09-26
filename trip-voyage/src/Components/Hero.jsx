import React from 'react';
import imageAcc from '../assets/accueil-img.jpg';

const Hero = () => {
    return (
        <>
            <div className="w-100 position-relative">
                <img className="w-100" src={imageAcc} alt="img-accueil" />
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <h1 className='text-white text-4xl mb-2'>Your Journey, Your Story</h1>
                    <p className='text-white mb-1'>Choose Your Favourite Destination.</p>
                    <button className="btn btn-primary p-2 rounded-3">
                        <a href="/signup" className="text-white text-decoration-none">Réserver maintenant</a>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Hero;
