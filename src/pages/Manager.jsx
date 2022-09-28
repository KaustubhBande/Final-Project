import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Manager = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userId");
        navigate("/", {replace: true});
    }
    return (
        <div>
            <Navbar bg="success" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Pureplay</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link><Link to="/manager" style={styles.navLink}>Home</Link></Nav.Link>
                            <Nav.Link><Link to="/manager/profile" style={styles.navLink}>Manager Profile</Link></Nav.Link>
                            <Nav.Link><Link to="/manager/turfbookings" style={styles.navLink}>Turf Bookings</Link></Nav.Link>
                            <Nav.Link><Link style={styles.navLink}><button onClick={handleLogout} style={styles.button}>Logout</button></Link></Nav.Link>
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
    },
    button: {
        background: 'transparent',
        color: 'white',
        textDecoration: 'none',
        border: 'none'
    }
}