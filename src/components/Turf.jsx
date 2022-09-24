import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const Turf = (props) => {

    return (
        <div>
            <Card style={{ width: '18rem' }} className="m-5">
                <Card.Img variant="bottom" src="https://picsum.photos/200/200" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.address} {props.contact} {props.loc}
                    </Card.Text>
                    <Link to="/singleturf" state={props.loc}><Button variant="primary">Book Now</Button></Link>
                </Card.Body>
            </Card>            
        </div>
    );
};

export default Turf;

