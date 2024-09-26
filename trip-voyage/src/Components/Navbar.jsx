import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <ul className="flex justify-between items-center px-8 py-4">
        {/* Left-aligned logo or brand name */}
        <li className="text-gray-800 text-lg">
          <Link to="/" className="hover:text-blue-600 transition">Trippy</Link>
        </li>
        
        {/* Right-aligned navigation links */}
        <div className="flex space-x-6">
          <li>
            <Link to="/about" className="text-gray-800 hover:text-blue-600 transition">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition">Contact</Link>
          </li>
          <li>
            <Link to="/services" className="text-gray-800 hover:text-blue-600 transition">Services</Link>
          </li>
          <li>
            <Link to="/signup" className="text-gray-800 hover:text-blue-600 transition">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin" className="text-gray-800 hover:text-blue-600 transition">Sign In</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
