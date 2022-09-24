import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const User = () => {
    return (
        <div>
            <Navbar bg="success" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Pureplay</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link><Link to="/user" style={styles.navLink}>Home</Link></Nav.Link>
                            <Nav.Link><Link to="/user/userprofile" style={styles.navLink}>User Profile</Link></Nav.Link>
                            <Nav.Link><Link to="/user/userbookings" style={styles.navLink}>My Bookings</Link></Nav.Link>
                            <Nav.Link><Link style={styles.navLink}>Logout</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
};

export default User;

const styles = {
    navLink: {
        textDecoration: 'none',
        color: 'white'
    }
}