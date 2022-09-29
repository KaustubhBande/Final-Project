import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';
import base_url from '../utils/bootapi';

const SearchBookings = () => {

    const [isDate, setIsDate] = useState(false);
    const [val, setVal] = useState();
    const [bookingDetails, setBookingDetails] = useState([]);
    const [pageDetails, setPageDetails] = useState({
        date: "",
        name: ""
    });
    const dateRef = useRef();
    const displayCal = () => {
        setVal("date");
        setIsDate(true);
        console.log(dateRef);
    }
    const displayTurf = () => {
        setVal("turf");
        setIsDate(false);
    }
    const displayName = () => {
        setVal("name");
        setIsDate(false);
    }
    const inputChangeHandler = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        const newDetails = { ...pageDetails, [e.target.name]: e.target.value };
        setPageDetails(newDetails);
        console.log(pageDetails);
        console.log("innnnnnn");
    };
    const loadDetails = async () => {
        console.log(pageDetails);
        console.log(val);
        if(val === "date"){
            console.log(typeof(pageDetails.date));
            const resp = await axios.get(`${base_url}/api/bookings/getbookingsbydate/${pageDetails.date}`, {
                headers: { Authorization: `Bearer ${sessionStorage.getItem("userToken")}` }
            });
            console.log(resp);
            setBookingDetails(resp.data);
        }
        else if(val === "turf"){
            const resp1 = await axios.get(`${base_url}/api/turfs/getturfbyname/${pageDetails.name}`, {
                headers: { Authorization: `Bearer ${sessionStorage.getItem("userToken")}` }
            });
            console.log(resp1);
            const resp = await axios.get(`${base_url}/api/bookings/getturfbookingsforadmin/${resp1.data.id}`, {
                headers: { Authorization: `Bearer ${sessionStorage.getItem("userToken")}` }
            });
            console.log(resp);
            setBookingDetails(resp.data);
            console.log(bookingDetails);
        }
        else if(val === "name"){
            const resp1 = await axios.get(`${base_url}/api/users/getuserbyemail/${pageDetails.name}`, {
                headers: { Authorization: `Bearer ${sessionStorage.getItem("userToken")}` }
            });
            console.log(resp1);
            const resp2 = await axios.get(`${base_url}/api/bookings/getuserbookingsforadmin/${resp1.data.id}`, {
                headers: { Authorization: `Bearer ${sessionStorage.getItem("userToken")}` }
            });
            console.log(resp2);
            setBookingDetails(resp2.data);
        }
    }
    return (
        <>
        <div className='row'>
            <div className='m-5'></div>
            <div className='offset-2 col-md-1 '>
                <input type="radio" id='radio1' name='display' onClick={displayCal} />
                <label class="labels m-1" for='radio1'>Date</label>
            </div>
            <div className='col-md-1 '>
                <input type="radio" id='radio2' name='display' onClick={displayTurf} />
                <label class="labels m-1" for='radio2'>Turf</label>
            </div>
            <div className='col-md-1 '>
                <input type="radio" id='radio3' name='display' onClick={displayName} />
                <label class="labels m-1" for='radio3'>Name</label>
            </div>
            {isDate ?
                <div className='offset-2 col-md-2'>
                <input ref={dateRef} type='date' name='date' value={pageDetails.date} onChange={inputChangeHandler}/>
            </div> : 
            <div className='offset-2 col-md-2'>
                <input type="text" placeholder='Enter something' name='name' value={pageDetails.name} onChange={inputChangeHandler}/>
            </div>
            }
            <div className='col-md-1'>
                <Button variant='success' onClick={loadDetails}>Search</Button>
            </div>
        </div>
        <div>
        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>User Name</th>                        
                        <th>Turf Name</th>
                        <th>Turf Location</th>
                    </tr>
                </thead>
                <tbody>
                    {bookingDetails.map((item, index) => {
                        return <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.slotbookingDate}</td>
                            <td>{item.bookingTime}</td>
                            <td>{item.user.name}</td>
                            <td>{item.turf.turfName}</td>
                            <td>{item.turf.turfAddress}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
        </>
    );
};

export default SearchBookings;