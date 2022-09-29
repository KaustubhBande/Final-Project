import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavLocation } from '../components/Header';

const AboutUs = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "About Us"
    })
    const handleLogout = () => {
        sessionStorage.removeItem("userToken");
        sessionStorage.removeItem("userEmail");
        sessionStorage.removeItem("userId");
        navigate("/", { replace: true });
    }
    return (
        <>
            <div className='headere bg-success'>
                <ul className='header-menu align-content-center justify-content-end px-5 py-md-4'>
                    <Link to="/" className="link"><li>Home</li></Link>
                    <NavLocation />
                    {sessionStorage.getItem("userToken") === null ? <Link to="/signin" className="link"><li>Signin</li></Link> : <Link to="/" className="link" onClick={handleLogout}><li>Logout</li></Link>}
                    <Link to="/aboutus" className="link"><li>About Us</li></Link>
                </ul>
            </div>
            <div>
                <h1>About Us</h1>
            </div>
        </>
    );
};

export default AboutUs;