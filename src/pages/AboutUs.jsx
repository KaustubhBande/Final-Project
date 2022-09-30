import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavLocation } from '../components/Header';
import '../css/AboutUs.css';
import Aditya from '../images/Aditya.jpeg';
import Harsh from '../images/Harsh.jpg';
import Kaustubh from '../images/Kaustubh.jpg';
import Sagar from '../images/Sagar.jpeg';

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
            <div className='bg-success'>
                <ul className='header-menu align-content-center justify-content-end px-5 py-md-4'>
                    <Link to="/" className="link"><li>Home</li></Link>
                    <NavLocation />
                    {sessionStorage.getItem("userToken") === null ? <Link to="/signin" className="link"><li>Signin</li></Link> : <Link to="/" className="link" onClick={handleLogout}><li>Logout</li></Link>}
                    <Link to="/aboutus" className="link"><li>About Us</li></Link>
                </ul>
            </div>
            <div className='my-5'>
                <h3 className='text-center text-success'>WHO ARE WE:</h3>
                <h5 className='text-center text-secondary'>A couple of sporting fanatics just like our customers, trying to solve problems which have troubled us for years.</h5><br />

                <h3 className='text-center text-success'>WHAT WE BELIEVE IN:</h3>
                <h5 className='text-center text-secondary'>We believe in the motto: "Live to Sport" because let's accept it, playing sports is pretty awesome. Plus it makes you feel awesome.</h5><br />

                <h3 className='text-center text-success'>WHAT ARE WE DOING HERE:</h3>
                <h5 className='text-center text-secondary'>Solving issues like IDENTIFYING Sports Venues, Cash Payments, AVAILABILITY, Confirmed Bookings !!! Our innovation will take you from Discovery to Checkout in a matter of minutes.</h5><br />

                <h3 className='text-center text-success'>WHAT WE WANT FROM YOU:</h3>
                <h5 className='text-center text-secondary'>Become a part of our continuously growing family, stay up to date with our Offers & Discounts and help make SPORLOC better over time.</h5><br />

                <h3 className='text-center text-success'>OUR VISION & MISSION:</h3>
                <h5 className='text-center text-secondary'>Our Vision is to promote every sport in INDIA and convert Sports from being a Hobby to a Habit in our lives. Our Mission is to become the "ONE SPOT FOR EVERYTHING SPORT".</h5>
            </div>
            <div className="service">
                <h1 className='text-center pt-5'>
                    Our Team members
                </h1>
                <div className="services">
                    <div className="box">
                        <img src={Aditya} alt="Aditya Nagle" /><br />
                        <p>Aditya Nagle</p>
                    </div>
                    <div class="box">
                        <img src={Harsh} alt="picture goes here" /><br />
                        <p>Harshwardhan Bhise</p>
                    </div>
                    <div class="box">
                        <img src={Kaustubh} alt="picture goes here" /><br />
                        <p>Kaustubh Bande</p>
                    </div>
                    <div class="box">
                        <img src={Sagar} alt="picture goes here" /><br />
                        <p>Nayan Barahate</p>
                    </div>
                    <div class="box">
                        <img src={Sagar} alt="picture goes here" /><br />
                        <p>Sagar Vyas</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;