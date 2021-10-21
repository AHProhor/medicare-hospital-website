import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import image3 from '../../images/others/dimage12.jpg';
import image1 from '../../images/others/dimage3.jpg';
import image2 from '../../images/others/dimage4.jpg';

const About = () => {
    return (
        <div className="expertStyle">
            <h1 className="mt-5 mb-5 text-primary fw-bolder">Traning System</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={image1}/>
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">CEO</Card.Title>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={image2}/>
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Operational Head</Card.Title>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="ml-5">
                    <Card.Img variant="top" src={image3}/>
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Board Memeber</Card.Title>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default About;