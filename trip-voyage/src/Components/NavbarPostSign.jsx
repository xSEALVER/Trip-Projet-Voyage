import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './auth/firebase';
import { FaShoppingCart } from 'react-icons/fa';  // Import the shopping cart icon

const NavbarPostSign = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert('You have been successfully logged out.');
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error.message);
        }
    };

    return (
        <Navbar bg="light" expand="lg">
            <div className="container">
                {/* Website Title */}
                <Navbar.Brand href="/">Trippy</Navbar.Brand>

                {/* Navbar Toggle for mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        {/* Cart link with an icon */}
                        <Nav.Link href="/cart">
                            <FaShoppingCart style={{ marginRight: '5px' }} /> 
                        </Nav.Link>
                        <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavbarPostSign;
