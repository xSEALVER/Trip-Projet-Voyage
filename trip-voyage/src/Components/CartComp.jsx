import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrash } from 'react-icons/fa'; // Import trash icon

const CartComp = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">No items in the cart.</p>
      ) : (
        <div className="row">
          {cartItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p><i className="bi bi-calendar"></i> {item.duration}</p>
                  <p className="text-danger"><strong>{item.price}</strong></p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(index)}
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartComp;
