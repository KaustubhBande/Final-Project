import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import base_url from '../utils/bootapi';

const ManagerBookings = () => {

    let [bookings, setBookings] = useState([]);
    useEffect(() => {
        getBookingsOfTurf();
    }, []);
    const getBookingsOfTurf = async () => {
        const response = await axios.get(`${base_url}/api/bookings/getbookingsofturf/3`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` }
        });
        console.log(response);
        setBookings(response.data);
    }
    return (
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
                    {bookings.map((item, index) => {
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
    );
};

export default ManagerBookings;