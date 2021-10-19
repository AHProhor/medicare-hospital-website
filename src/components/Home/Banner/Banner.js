import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Carosole/image1.png';
import banner2 from '../../../images/Carosole/image2.jpg';
import banner3 from '../../../images/Carosole/image3.jpg';
import banner4 from '../../../images/Carosole/image4.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel className="carosule-style">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption className="text-style fs-1 fw-bolder">
                    <h3>Respected Doctors Team</h3>
                    <p>MediCare Hospital And Diagonistic</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption className="text-style fs-1 fw-bolder">
                    <h3>Cardiologist</h3>
                    <p>Dr. Jhon Warner</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption className="text-style fs-1 fw-bolder">
                    <h3>Neurosurgeon</h3>
                    <p>Dr. David Fill</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner4}
                    alt="Third slide"
                    />

                    <Carousel.Caption className="text-style fs-1 fw-bolder">
                    <h3>Gynecologist</h3>
                    <p>Dr. MRs. Smith</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;