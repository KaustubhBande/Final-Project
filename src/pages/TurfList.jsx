import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import base_url from '../utils/bootapi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Turf from '../components/Turf';
import { NavLocation } from '../components/Header';
import '../css/Header.css';

const TurfList = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    let [dataobj, setDataObj] = useState([]);

    useEffect(() => {
        console.log(location);
        axios.get(`${base_url}/api/turfs/getturfbyadd/${location.state}`)
            .then((response) => {
                console.log(response);
                setDataObj(response.data);
            },
                (error) => {
                    console.log(error);
                }
            )
    }, []);

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
            <div className='d-flex'>
                {dataobj.map((item, index) => {
                    return <Turf loc={item.id} name={item.turfName} address={item.turfAddress} contact={item.turfContact} />
                })}
            </div>
        </>
    );
};

export default TurfList;