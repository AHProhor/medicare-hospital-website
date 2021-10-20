import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const {img,details,name, serviceHour,totalDoctor,id} = props.sendService;
    return (
        <div className="secificDepartmentStyle mb-5 shadow-lg p-3 mb-5 bg-body ">
              <div className="">
              <Card style={{ width: '29rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">{name}</Card.Title>
                    <h3>Doctos: {totalDoctor}</h3>
                    <p>Service Hour: {serviceHour}</p>
                    <Card.Text>{details}
                    </Card.Text>
                    <Link to={`/service/${id}`}><button type="button" class="btn btn-primary fw-bold ">Doctors</button></Link>
                </Card.Body>
            </Card>
              </div>
        </div>
    );
};

export default Service;