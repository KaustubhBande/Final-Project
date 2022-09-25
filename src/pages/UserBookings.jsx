import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import base_url from '../utils/bootapi';

const UserBookings = () => {

    let [bookings, setBookings] = useState([]);
    useEffect(() => {
        getBookingsOfUser();
    }, []);
    const getBookingsOfUser = async () => {
        const response = await axios.get(`${base_url}/api/bookings/getbookingsofuser/${localStorage.getItem("userId")}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` }
        });
        console.log(response);
        setBookings(response.data);
    }

    const cancelBooking = async (item, index) => {
        console.log(item.id);
        const response = await axios.delete(`${base_url}/api/bookings/delete/${item.id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` }
        });
        console.log(response);
        getBookingsOfUser();
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Turf Name</th>
                        <th>Turf Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((item, index) => {
                        return <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.slotbookingDate}</td>
                            <td>{item.bookingTime}</td>
                            <td>{item.turf.turfName}</td>
                            <td>{item.turf.turfAddress}</td>
                            <td><span className='badge bg-danger' role='button' onClick={() => cancelBooking(item, index)}>Cancel Booking</span></td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default UserBookings;