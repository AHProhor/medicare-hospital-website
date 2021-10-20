import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Appoinment.css';

const Appoinment = () => {
    return (
        <div>
            <h1 className="mt-5 text-primary">Information For Appoinment</h1>
            <div className="appointmentFormStyle">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name Please" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Age Please" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Problems</Form.Label>
                    <Form.Control type="text" placeholder="Problems" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Symptoms</Form.Label>
                    <Form.Control placeholder="Symptoms" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Appoinment Schedule</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Address</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>
                <Button className="bg-primary text-light" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        </div>
    );
};

export default Appoinment;