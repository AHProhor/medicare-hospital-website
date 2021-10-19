import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import expert1 from '../../../images/experts/dimage12.jpg';
import expert3 from '../../../images/experts/dimage14.jpg';
import expert2 from '../../../images/experts/dimage5.jpg';
import './Expert.css';

const Expert = () => {
    return (
        <div className="expertStyle">
            <h1 className="mt-5 mb-5 text-primary fw-bolder">Experts</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={expert1} />
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Head of Sergery</Card.Title>
                    <h2>Name: Dr. Yarn Blain</h2>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={expert2} />
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Heade of Gynaecology</Card.Title>
                    <h2>Name: Dr. MRs. Smith</h2>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="ml-5">
                    <Card.Img variant="top" src={expert3} />
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Head of Orthopedics</Card.Title>
                    <h2>Name: Dr. Jhon Mark</h2>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Expert;<h1>Expert Section</h1>