import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLocation } from '../components/Header';

const User = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("userToken");
        navigate("/signin");
    }

    return (
        <div>
            <Navbar bg="success" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Pureplay</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link><Link to="/user" style={styles.navLink}>Home</Link></Nav.Link>
                            <NavLocation style={styles.navLink} />
                            <Nav.Link><Link to="/user/userprofile" style={styles.navLink}>User Profile</Link></Nav.Link>
                            <Nav.Link><Link to="/user/userbookings" style={styles.navLink}>My Bookings</Link></Nav.Link>
                            <Nav.Link><Link style={styles.navLink}><button onClick={handleLogout} style={styles.button}>Logout</button></Link></Nav.Link>
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
    },
    button: {
        background: 'transparent',
        color: 'white',
        textDecoration: 'none',
        border: 'none'
    }
}