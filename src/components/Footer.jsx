import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Footer.css';

function Footer() {
    return (
        <>
            <div className="bg-black text-light d-flex align-content-center justify-content-center">
                <h6>{new Date().getTime}2022 pureplay sports. All Rights Reserved.</h6>
            </div>
        </>
    );
}

export default Footer;