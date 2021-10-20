import React from 'react';
import { Card } from 'react-bootstrap';
import './TotallDoctor.css';

const TotallDoctor = ({doctor}) => {
    return (
        <div>
            <div className="totallDoctorStyle">
              <Card style={{ width: '29rem' }}>
                <Card.Img variant="top" src={doctor.img} />
                <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">{doctor.name}</Card.Title>
                    <h3>Department: {doctor.department}</h3>
                    <p>Service Hour: {doctor.serviceTime}</p>
                    <p>Visit: {doctor.Visit}</p>
                    <p>Off day: {doctor.Offday}</p>
                    <p>Qualification: {doctor.qualifica}</p>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
              </div>
        </div>
    );
};

export default TotallDoctor;