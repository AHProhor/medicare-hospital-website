import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import image13 from '../../images/covid/cimage2.jpg';
import image12 from '../../images/covid/cimage3.jpg';
import image11 from '../../images/covid/cimaje1.jpg';

const CovidCare = () => {
    return (
        <div className="expertStyle">
            <h1 className="mt-5 mb-5 text-primary fw-bolder">mediCare Covid Care</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={image11}/>
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">24 Hours We All Stands For You</Card.Title>
                    <h2>50 Doctors</h2>
                    <h2>300 Nurses</h2>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={image12}/>
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Central Oxyzen Supply and ICU</Card.Title>
                    <h2>50 ICU BED</h2>
                    <h2>We can Supply 300 people central Oxyzen at time</h2>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="ml-5">
                    <Card.Img variant="top" src={image13}/>
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">24 Hours Diagonistic center are open for Yoy</Card.Title>
                    <h2>50 Analysts working Day and Night only For You</h2>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default CovidCare;