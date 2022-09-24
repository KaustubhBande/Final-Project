import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

const Manager = () => {
    return (
        <div>
            <Navbar bg="success" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Pureplay</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link><Link to="/manager" style={styles.navLink}>Home</Link></Nav.Link>
                            <Nav.Link><Link to="/manager/profile" style={styles.navLink}>Manager Profile</Link></Nav.Link>
                            <Nav.Link><Link to="/manager/turfbookings" style={styles.navLink}>Turf Bookings</Link></Nav.Link>
                            <Nav.Link><Link style={styles.navLink}><button>Logout</button></Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
};

export default Manager;

const styles = {
    navLink: {
        textDecoration: 'none',
        color: 'white'
    }
}