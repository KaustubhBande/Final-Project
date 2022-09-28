import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../images/5.jpeg";
import img2 from "../images/6.jpeg";
import img3 from "../images/7.jpeg";

const UserHome = () => {
    return (
        <div className="sub-div1">

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        style={{ height: 700 }}
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        style={{ height: 700 }}
                    />

                    <Carousel.Caption>


                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        style={{ height: 700 }}
                    />

                    <Carousel.Caption>


                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>
        </div>

    );
};

export default UserHome;