import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Admin = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.removeItem("userToken");
        sessionStorage.removeItem("userEmail");
        sessionStorage.removeItem("userId");
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
                            <Nav.Link><Link to="/admin" style={styles.navLink}>Home</Link></Nav.Link>
                            <Nav.Link><Link to="/admin/profile" style={styles.navLink}>Admin Profile</Link></Nav.Link>
                            <Nav.Link><Link to="/admin/searchbookings" style={styles.navLink}>Search Bookings</Link></Nav.Link>
                            <Nav.Link><Link style={styles.navLink}><button onClick={handleLogout} style={styles.button}>Logout</button></Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
};

export default Admin;

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