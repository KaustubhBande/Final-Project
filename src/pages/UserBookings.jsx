import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import base_url from '../utils/bootapi';

const UserBookings = () => {
    useEffect(() => {
        getBookingsOfUser();
    });
    const getBookingsOfUser = async () => {
        const response = await axios.get(`${base_url}/api/bookings/getbookingsofuser/4`);
        console.log(response);
        // const bookingList = response.data;
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        {/* <td><Button variant='secondary' className='m-1'> Update</Button><Button variant='danger'>Delete</Button></td> */}
                        <td><span className='badge bg-primary' role='button'>Edit</span><span className='badge bg-danger' role='button'>Delete</span></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default UserBookings;