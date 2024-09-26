// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="bg-white shadow">
//       <ul className="flex justify-between items-center px-8 py-4">
//         {/* Left-aligned logo or brand name */}
//         <li className="text-gray-800 text-lg">
//           <Link to="/" className="hover:text-blue-600 transition">Trippy</Link>
//         </li>
        
//         {/* Right-aligned navigation links */}
//         <div className="flex space-x-6">
//           <li>
//             <Link to="/aboutpost" className="text-gray-800 hover:text-blue-600 transition">About</Link>
//           </li>
//           <li>
//             <Link to="/contactpost" className="text-gray-800 hover:text-blue-600 transition">Contact</Link>
//           </li>
//           <li>
//             <Link to="/servicespost" className="text-gray-800 hover:text-blue-600 transition">Services</Link>
//           </li>
//           <li>
//             <Link to="/signin" className="text-gray-800 hover:text-blue-600 transition">Log Out</Link>
//           </li>
//         </div>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

// import { Link, useNavigate } from 'react-router-dom';
// import { getAuth, signOut } from "firebase/auth";

// function Navbar() {
//   const navigate = useNavigate(); // Hook to programmatically navigate

//   const handleLogout = async () => {
//     const auth = getAuth(); // Get Firebase auth instance
//     try {
//       await signOut(auth); // Log out the user
//       navigate('/'); // Redirect to the sign-in page after logout
//     } catch (error) {
//       console.error("Error logging out: ", error);
//     }
//   };

//   return (
//     <nav className="bg-white shadow">
//       <ul className="flex justify-between items-center px-8 py-4">
//         {/* Left-aligned logo or brand name */}
//         <li className="text-gray-800 text-lg">
//           <Link to="/" className="hover:text-blue-600 transition">Trippy</Link>
//         </li>
        
//         {/* Right-aligned navigation links */}
//         <div className="flex space-x-6">
//           <li>
//             <Link to="/aboutpost" className="text-gray-800 hover:text-blue-600 transition">About</Link>
//           </li>
//           <li>
//             <Link to="/contactpost" className="text-gray-800 hover:text-blue-600 transition">Contact</Link>
//           </li>
//           <li>
//             <Link to="/servicespost" className="text-gray-800 hover:text-blue-600 transition">Services</Link>
//           </li>
//           <li>
//             <button 
//               onClick={handleLogout} 
//               className="text-gray-800 hover:text-blue-600 transition"
//             >
//               Log Outt
//             </button>
//           </li>
//         </div>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signOut } from "firebase/auth";

function Navbar() {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [logoutAlert, setLogoutAlert] = useState(false); // State for logout alert

  const handleLogout = async () => {
    const auth = getAuth(); // Get Firebase auth instance
    try {
      await signOut(auth); // Log out the user
      setLogoutAlert(true); // Show logout alert
      setTimeout(() => {
        navigate('/'); // Redirect to the homepage page after a short delay
      }, 2000); // Delay before redirecting
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

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
            <Link to="/aboutpost" className="text-gray-800 hover:text-blue-600 transition">About</Link>
          </li>
          <li>
            <Link to="/contactpost" className="text-gray-800 hover:text-blue-600 transition">Contact</Link>
          </li>
          <li>
            <Link to="/servicespost" className="text-gray-800 hover:text-blue-600 transition">Services</Link>
          </li>
          <li>
            <button 
              onClick={handleLogout} 
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Log Out
            </button>
          </li>
        </div>
      </ul>

      {/* Logout Alert */}
      {logoutAlert && (
        <div className=" bg-green-500 text-white p-4 rounded shadow-lg">
          You have been logged out successfully!
        </div>
      )}
    </nav>
  );
}

export default Navbar;


