import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = ({doctor}) => {
    // const{name,img,department1,serviceTime,Visit,Offday,qualifica} =props.sendMedicine
    return (
        <div>
            <div className="medicineDoctorStyle">
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
                    <Link to="/appoinment">
                    <button type="button" class="btn btn-primary fw-bold ">Appointment</button>
                    </Link>
                </Card.Body>
            </Card>
              </div>
        </div>
    );
};

export default Doctor;