import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import base_url from '../utils/bootapi';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-grid-system';
import { NavLocation } from '../components/Header';


const SingleTurf = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [turfData, setTurfData] = useState({});
    const [pageDetails, setPageDetails] = useState({
        date: ""
    });
    const datetime = new Date();
    const inputDate = "" + (datetime.getFullYear) + "-" + (datetime.getMonth) + "-" + (datetime.getDate);
    const [bookingDetailsObject, setBookingDetailsObject] = useState({
        bookingDate: inputDate,
        bookingTime: "",
        slotbookingDate: "",
        user: { id: parseInt(localStorage.getItem("userId")) },
        turf: { id: parseInt(location.state) }
    });
    const [bookings, setBookings] = useState([]);
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
    const inputChangeHandler = (e) => {
        const newDetails = { ...pageDetails, [e.target.name]: e.target.value }
        setPageDetails(newDetails);
        const newObjInput = { ...bookingDetailsObject, slotbookingDate: pageDetails.date }
        setBookingDetailsObject(newObjInput);
        console.log(bookingDetailsObject);
    }
    const getBookings = async () => {
        console.log(location.state);
        console.log(pageDetails.date);
        const resp = await axios.get(`${base_url}/api/bookings/getbookingsbydateandturf/${pageDetails.date}/${location.state}`);
        console.log(resp);
        setBookings(resp.data);
        await isChecked();
    }
    const isChecked = () => {
        console.log("isChecked function");
        timeArray.forEach((item, index) => {
            const element = document.getElementById(item);
            element.checked = false;
            element.disabled = false;
        })
        bookings.forEach((item, index) => {
            // console.log(timeArray.indexOf(item.bookingTime));
            if (timeArray.indexOf(item.bookingTime) === -1) {
            }
            else {
                const element = document.getElementById(item.bookingTime);
                element.checked = true;
                element.disabled = true;
            }
        })
    }
    const timeArray = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];

    const makeBooking = async () => {
        timeArray.forEach(async (item, index) => {
            const element = document.getElementById(item);
            if (element.checked === true && element.disabled === false) {
                console.log(element.name);

                let inputPackage = {
                    bookingDate: "2022-09-28",
                    bookingTime: element.value,
                    slotbookingDate: pageDetails.date,
                    user: { id: parseInt(localStorage.getItem("userId")) },
                    turf: { id: parseInt(location.state) }
                }
                console.log(inputPackage);
                const resp = await axios.post(`${base_url}/api/bookings/add`, inputPackage, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` }
                });
                console.log(resp);
            }
        })
    }

    const handleLogout = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userId");
        navigate("/", { replace: true });
    }

    return (
        <>
            <div className='bg-success'>
                <ul className='header-menu align-content-center justify-content-end px-5 py-md-4'>
                    <Link to="/" className="link"><li>Home</li></Link>
                    <NavLocation />
                    {localStorage.getItem("userToken") === null ? <Link to="/signin" className="link"><li>Signin</li></Link> : <Link to="/" className="link" onClick={handleLogout}><li>Logout</li></Link>}
                    <Link to="/aboutus" className="link"><li>About Us</li></Link>
                </ul>
            </div>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className="m-5">
                            <Card.Img variant="bottom" src="https://picsum.photos/200/200" />
                            <Card.Body>
                                <Card.Title>{turfData.turfName}</Card.Title>
                                <Card.Text>
                                    {turfData.turfAddress}<br />
                                    Contact us at - {turfData.turfContact}
                                </Card.Text>
                                {/* <Link to="/singleturf" state={1}><Button variant="primary">Book Now</Button></Link> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Row className='my-5'>
                            <Col>
                                <input type="date" className='mx-3' name='date' value={pageDetails.date} onChange={inputChangeHandler} />
                                <label>Pick a Date</label>
                                <Button variant='success' className='mx-5' onClick={getBookings}>Search</Button>
                            </Col>
                        </Row>
                        <Row className='flex-wrap'>
                            {timeArray.map((item, index) => {
                                return <Col md={2}>
                                    <CheckBox val={item} />
                                </Col>
                            })}
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <h5></h5>
                    </Col>
                    <Col md={2}>
                        <Button onClick={makeBooking} className="my-5" variant='success' >Confirm Booking</Button>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </>
    );
};

export default SingleTurf;

const CheckBox = (props) => {
    const [cost, setCost] = useState(0);
    const timeArray = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
    const calculateCost = () => {
        setCost(0);
        timeArray.forEach(async (item, index) => {
            const element = document.getElementById(item);
            if (element.checked === true && element.disabled === false) {
                setCost(cost + 1000);
            }
        })
        console.log(cost);
    }
    return (
        <div className='my-5 mx-3'>
            <input type="checkbox" id={props.val} name={props.val} value={props.val} onChange={calculateCost} />
            <label className='mx-2'>{props.val}</label>
        </div>
    );
}

{/* <Col md={2}>
        <CheckBox val="06:00"/>
    </Col>
    <Col md={2}>
        <CheckBox val="07:00" />
    </Col>
    <Col md={2}>
        <CheckBox val="08:00" />
    </Col>
    <Col md={2}>
        <CheckBox val="09:00" />
    </Col>
    <Col md={2}>
        <CheckBox val="10:00" />
    </Col>
    <Col md={2}>
        <CheckBox val="11:00" />
    </Col>
</Row>
<Row className='my-5 p-3'>
    <Col md={2}>
        <CheckBox val="12:00" />
    </Col>
    <Col md={2}>
        <CheckBox val="13:00" />
    </Col>
    <Col md={2}>
        <CheckBox val="14:00" />
    </Col>
    <Col md={2}>
        <CheckBox val="15:00" />
    </Col>
    <Col md={2}>
        <CheckBox val="16:00" />
    </Col>
    <Col md={2}>
        <CheckBox val="17:00" />
    </Col>
</Row>
<Row className='my-5 p-3'>
    <Col md={2}>
        <CheckBox val="18:00" />
    </Col>
    <Col md={2}>
        <CheckBox val="19:00" />
    </Col>
    <Col md={2}>
        <CheckBox val="20:00" />
    </Col>
    <Col md={2}>
        <CheckBox val="21:00" />
    </Col>
    <Col md={2}>
        <CheckBox val="22:00" />
    </Col>
    <Col md={2}>
        <CheckBox val="23:00" />
    </Col> */}