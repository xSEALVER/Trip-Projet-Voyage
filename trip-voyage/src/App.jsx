import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { CartProvider } from './context/CartContext';  // Import CartProvider


import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Trips from './Pages/Trips';
import Cart from './Pages/Cart';


function App() {

  return (
   
    <CartProvider>  {/* Wrap the app in CartProvider */}

        <Router>
            
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/services' element={<Services/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/signin' element={<SignIn/>} />
              <Route path='/trips' element={<Trips/>} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>

        </Router>

    </CartProvider>

  );
}

export default App
