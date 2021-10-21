import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import image13 from '../../images/traning/dimage9.jpg';
import image12 from '../../images/traning/nurse.jpg';
import image11 from '../../images/traning/tecnitian.jpg';

const Traning = () => {
    return (
        <div className="expertStyle">
            <h1 className="mt-5 mb-5 text-primary fw-bolder">Traning System</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={image13}/>
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">IntenShip for Doctor</Card.Title>
                    <h2>Duration: 1 year</h2>
                    <h5>Conditons:</h5>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    <button type="button" class="btn btn-primary fw-bold ">Apply Now</button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={image12}/>
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Inturnship for Nurses</Card.Title>
                    <h2>Duration: 6 months</h2>
                    <h5>Condition:</h5>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    <button type="button" class="btn btn-primary fw-bold ">Apply Now</button>
                    </Card.Body>
                </Card>
                <Card className="ml-5">
                    <Card.Img variant="top" src={image11}/>
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Lab Technitian</Card.Title>
                    <h2>Duration: 1 Year</h2>
                    <h5>Condition:</h5>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    <button type="button" class="btn btn-primary fw-bold ">Apply Now</button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Traning;