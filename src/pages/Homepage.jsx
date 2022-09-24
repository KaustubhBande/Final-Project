import React from 'react';
import Video from '../videos/background_video.mp4';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Homepage.css';


function Homepage() {
    return (
        <>
            <div className='homebody'>
                <Header />
                <div className='container-fluid'>
                    <video autoPlay loop muted >
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Homepage;