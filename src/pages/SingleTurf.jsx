import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import base_url from '../utils/bootapi';
import 'bootstrap/dist/css/bootstrap.min.css';


const SingleTurf = () => {
    const location = useLocation();
    let [turfData, setTurfData] = useState([]);
    useEffect(() => {
        console.log(location.state);
        axios.get(`${base_url}/api/turfs/getturf/${location.state}`)
            .then((response) => {
                console.log(response);
                setTurfData(response.data);
            },
                (error) => {
                    console.log(error);
                }
            )
    }, []);
    return (
        <div>
            {turfData.map((item, index) => {
                return <h4>{item.turfName}</h4>
            })}
        </div>
    );
};

export default SingleTurf;