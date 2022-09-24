import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import base_url from '../utils/bootapi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Turf from '../components/Turf';

const TurfList = (props) => {
    const location = useLocation();
    let [dataobj, setDataObj] = useState([]);
    useEffect(() => {
        console.log(location);
        axios.get(`${base_url}/api/turfs/getall`)
            .then((response) => {
                console.log(response);
                setDataObj(response.data);
            },
                (error) => {
                    console.log(error);
                }
            )
    }, []);

    return (
        <div className='d-flex-row justify-content-center align-content-center'>
            {dataobj.map((item, index) => {
                return <Turf xy={item.id} name={item.turfName} address={item.turfAddress} contact={item.turfContact}/> 
            })}
           
        </div>
    );
};

export default TurfList;