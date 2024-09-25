import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavbarOf = () => {
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
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                        <Nav.Link href="/signin">Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavbarOf;
