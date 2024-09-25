import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';  // Import CartContext
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook from React Router
import imgTest from '../assets/test.jpg';
import imgBordeaux from '../assets/bordeaux-img.jpg';
import imgTokyo from '../assets/tokyo-img.jpg';
import imgSidney from '../assets/sydney-img.jpg';
import imgCaptown from '../assets/cap-town.jpg';
import imgRio from '../assets/rio-img.jpg';
import imgMarra from '../assets/marra-img.jpg';
import imgNewyork from '../assets/new-york-img.jpg';
import imgIstanbul from '../assets/istanbul-img.jpg';
import imgRome from '../assets/rome-img.jpg';
import imgBuenos from '../assets/buenos-img.jpg';
import imgBangkok from '../assets/bangkok-img.jpg';
import imgVancouver from '../assets/vancouver-img.jpg';
import imgAthens from '../assets/athens-img.jpg';
import imgDubai from '../assets/dubai-img.jpg';
import imgLisbon from '../assets/lisbon-img.jpg';
import imgBerlin from '../assets/berlin-img.jpg';
import imgSands from '../assets/sands-img.jpg';
import imgSingapore from '../assets/singapore-img.jpg';
import imgKyoto from '../assets/kyoto-img.jpg';
import imgZealand from '../assets/zealand-img.jpg';


const TripsComp = () => {
  const location = useLocation();
  const { state } = location;
  const name = state?.name || 'Guest';
  const email = state?.email || 'No email provided';

  const { addToCart } = useContext(CartContext); // Get addToCart from CartContext
  const [modalContent, setModalContent] = useState({});
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const trips = [
    {
      id: 1,
      title: 'Bordeaux Express',
      description: 'De la Dune du Pilat à la pointe du Cap-Ferret...',
      duration: '5 jours',
      price: 'À partir de 829€',
      image: imgBordeaux
    },
    {
      id: 2,
      title: 'Tokyo Adventure',
      description: 'Explorez les merveilles de Tokyo, de Shibuya à Asakusa',
      duration: '7 jours',
      price: 'À partir de 1 200€',
      image: imgTokyo
    },
    {
      id: 3,
      title: 'Sydney Coastal Escape',
      description: 'Détente le long des plages de Sydney, de Bondi à Manly',
      duration: '6 jours',
      price: 'À partir de 950€',
      image: imgSidney
    },
    {
      id: 4,
      title: 'Cape Town Wonders',
      description: 'Découvrez le Cap de Bonne-Espérance et la Montagne de la Table',
      duration: '8 jours',
      price: 'À partir de 1 100€',
      image: imgCaptown
    },

    {
        id: 5,
        title: 'Rio Carnival Experience',
        description: 'Imprégnez-vous de l’ambiance du Carnaval de Rio',
        duration: '5 jours',
        price: 'À partir de 1 300€',
        image: imgRio
      },
      {
        id: 6,
        title: 'Marrakech Mystique',
        description: 'Plongez dans l’ambiance des souks et des jardins de Marrakech',
        duration: '4 jours',
        price: 'À partir de 750€',
        image: imgMarra
      },

      {
        id: 7,
        title: 'New York Lights',
        description: 'Vibrez au rythme de New York, de Times Square à Central Park',
        duration: '6 jours',
        price: 'À partir de 1 500€',
        image: imgNewyork
      },
      {
        id: 8,
        title: 'Istanbul Magic',
        description: 'Explorez les trésors d’Istanbul, du Grand Bazar à Sainte-Sophie',
        duration: '5 jours',
        price: 'À partir de 900€',
        image: imgIstanbul
      },
      {
        id: 9,
        title: 'Rome Eternal City',
        description: 'Découvrez les merveilles de Rome, du Colisée au Vatican',
        duration: '7 jours',
        price: 'À partir de 1 000€',
        image: imgRome
      },
//  faire reijkavk avec row  house
      {
        id: 10,
        title: 'Reykjavik Wonders',
        description: 'Explorez les paysages époustouflants d’Islande depuis Reykjavik',
        duration: '6 jours',
        price: 'À partir de 1 200€',
        image: imgTest
      },
      {
        id: 11,
        title: 'Buenos Aires Tango',
        description: 'Vivez l’expérience du tango et de la culture argentine à Buenos Aires',
        duration: '5 jours',
        price: 'À partir de 950€',
        image: imgBuenos
      },
      {
        id: 12,
        title: 'Bangkok Bliss',
        description: 'Découvrez les temples et la vie nocturne de Bangkok',
        duration: '6 jours',
        price: 'À partir de 850€',
        image: imgBangkok
      },
      {
        id: 13,
        title: 'Vancouver Nature',
        description: 'Admirez la beauté naturelle de Vancouver et ses environs',
        duration: '7 jours',
        price: 'À partir de 1 000€',
        image: imgVancouver
      },
      {
        id: 14,
        title: 'Athens Heritage',
        description: 'Explorez les sites antiques et la culture moderne d’Athènes',
        duration: '5 jours',
        price: 'À partir de 800€',
        image: imgAthens
      },
      {
        id: 15,
        title: 'Dubai Modern Marvels',
        description: 'Découvrez les merveilles modernes de Dubaï et ses attractions',
        duration: '6 jours',
        price: 'À partir de 1 100€',
        image: imgDubai
      },
      {
        id: 16,
        title: 'Lisbon Charm',
        description: 'Vivez l’ambiance et les saveurs uniques de Lisbonne',
        duration: '4 jours',
        price: 'À partir de 700€',
        image: imgLisbon
      },
      {
        id: 17,
        title: 'Berlin Buzz',
        description: 'Plongez dans l’histoire et la culture vibrante de Berlin',
        duration: '5 jours',
        price: 'À partir de 850€',
        image: imgBerlin
      },
      {
        id: 18,
        title: 'Dubai Sands',
        description: 'Explorez les dunes et les attractions de Dubaï...',
        duration: '7 jours',
        price: 'À partir de 1 200€',
        image: imgSands
      },
      {
        id: 19,
        title: 'Singapore Skyline',
        description: 'Admirez les vues époustouflantes et les attractions de Singapour',
        duration: '5 jours',
        price: 'À partir de 1 000€',
        image: imgSingapore
      },
      {
        id: 20,
        title: 'Kyoto Serenity',
        description: 'Découvrez la tranquillité et la beauté des temples de Kyoto',
        duration: '6 jours',
        price: 'À partir de 950€',
        image:  imgKyoto
      },

      {
        id: 21,
        title: 'New Zealand Road Trip',
        description: 'Découvrez les merveilles naturelles de la Nouvelle-Zélande',
        duration: '10 jours',
        price: 'À partir de 1800€',
        image: imgZealand
      }
    // Add more trips as needed
  ];

  const handleCardClick = (trip) => {
    setModalContent(trip);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Function to handle the "Ajouter" button
  const handleAddToCart = () => {
    console.log('Adding to cart:', modalContent); // Log the item being added
    addToCart(modalContent);  // Add the selected trip to the cart
    alert("Adding to cart");
    navigate('/cart');

    closeModal();  // Optionally close the modal after adding
  };

  return (
    <>
      <div>
        <h1 className='text-center mt-5'>Toutes vos vacances en un clic</h1>
        <p className='text-center'>Évadez-vous avec nos offres</p>
        <p className='text-center'><strong>Welcome, {name}!</strong></p>
        <p className='text-center'>Your email: {email}</p>
      </div>

      <div className='container mt-5'>
        <div className='row'>
          {trips.map((trip) => (
            <div className='col-md-4 mb-4' key={trip.id}>
              <div
                className="card"
                style={{ width: '100%', borderRadius: '8px', cursor: 'pointer' }}
                onClick={() => handleCardClick(trip)}
              >
                <img
                  src={trip.image}
                  className="card-img-top"
                  alt={trip.title}
                  style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{trip.title}</h5>
                  <p className="card-text">{trip.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="bi bi-calendar"></i> {trip.duration}
                    </div>
                    <div className="text-danger">
                      <strong>{trip.price}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" onClick={closeModal}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalContent.title}</h5>
                <button type="button" className="close" onClick={closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={modalContent.image} alt={modalContent.title} className="img-fluid mb-3" />
                <p>{modalContent.description}</p>
                <p><i className="bi bi-calendar"></i> {modalContent.duration}</p>
                <p className="text-danger"><strong>{modalContent.price}</strong></p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleAddToCart}>Ajouter</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .card:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default TripsComp;
