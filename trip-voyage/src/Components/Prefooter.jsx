import React from 'react'
import imgTest from '../assets/test.jpg';
import img1 from '../assets/three-1.jpg';
import img2 from '../assets/three-2.jpg';
import img3 from '../assets/az_img.jpg';


const Prefooter = () => {
    return (
    <>

<div>
        <h1 className=' text-center mt-5'>Voyages Récents</h1>
        <p className=' text-center'>Vous pouvez découvrir des destinations uniques en utilisant Google Maps.</p>
</div>
        <div className='d-flex justify-content-center align-items-center gap-5 mt-5 '>
        <div className="card shadow-sm" style={{ width: '18rem', height: '24rem', borderRadius: '8px', overflow: 'hidden' }}>
            <img
                src={img1}
                className="card-img-top"
                alt="Service"
                style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px', height: '50%' }}
            />
            <div className="card-body" style={{ height: '50%', overflow: 'auto' }}>
                <h6 className="text-muted">Namibie</h6>
                <h6 className="card-title font-weight-bold"> Un paysage désertique envoûtant :</h6>
                <p className="card-text">
                    Dunes majestueuses, 
                    arbres morts sculptés par le temps, ciel étoilé spectaculaire. 
                    Une expérience unique pour les amateurs de nature sauvage et de photographie.
                </p>
            </div>
        </div>

        <div className="card shadow-sm" style={{ width: '18rem', height: '24rem', borderRadius: '8px', overflow: 'hidden' }}>
            <img
                src={img2}
                className="card-img-top"
                alt="Service"
                style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px', height: '50%' }}
            />
            <div className="card-body" style={{ height: '50%', overflow: 'auto' }}>
                <h6 className="text-muted">Pays-Bas</h6>
                <h6 className="card-title font-weight-bold"> Vue époustouflante sur canyon escarpé :</h6>
                <p className="card-text">
                falaises vertigineuses, silhouette solitaire sur le rebord, panorama désertique à l'horizon. 
                Paradis des randonneurs et amateurs de sensations fortes.
                </p>
            </div>
        </div>

        <div className="card shadow-sm" style={{ width: '18rem', height: '24rem', borderRadius: '8px', overflow: 'hidden' }}>
            <img
                src={img3}
                className="card-img-top"
                alt="Service"
                style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px', height: '50%' }}
            />
            <div className="card-body" style={{ height: '50%', overflow: 'auto' }}>
                <h6 className="text-muted">Namibie</h6>
                <h6 className="card-title font-weight-bold"> Coucher de soleil spectaculaire dans l'arizona :</h6>
                <p className="card-text">
                Cactus saguaro majestueux, ciel enflammé aux couleurs chaudes, 
                silhouette de montagnes lointaines. Moment magique pour les amoureux de la nature.
                </p>
            </div>
        </div>  
        </div>
            </>
        );
}

export default Prefooter