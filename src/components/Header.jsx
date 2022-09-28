import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userId");
        navigate("/", {replace: true}); 
    }
    return (
        <>
            <div className="header">
                <img src="https://madisoncapital.com/wp-content/uploads/png/Pure-Play-logo-300x199.png" alt="" className='logo pt-4' />

                <ul className='header-menu'>
                    <NavLocation />
                    {localStorage.getItem("userToken") === null ? <Link to="/signin" className="link"><li>Signin</li></Link> : <Link to="/" className="link" onClick={handleLogout}><li>Logout</li></Link>}
                    <Link to="/aboutus" className="link"><li>About Us</li></Link>
                </ul>
            </div>
        </>
    );
}

export default Header;

function NavLocation() {
    return (
        <NavDropdown title="Location" id="navbarScrollingDropdown">
            <NavDropdown.Item><Link to="/turflist" state={"Wakad"} className="loc">Wakad</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/turflist" state={"Kothrud"} className="loc">Kothrud</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/turflist" state={"Katraj"} className="loc">Katraj</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/turflist" state={"Shivaji Nagar"} className="loc">Shivaji Nagar</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/turflist" state={"Sinhgad Road"} className="loc">Sinhgad Road</Link></NavDropdown.Item>
        </NavDropdown>
    );
}

export {NavLocation};