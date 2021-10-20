import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        fetch('/doctors.json')
        .then(response => response.json())
        .then(data => setDoctors(data));
    },[])

    const data = doctors.filter(item => item.deptId == id);
    console.log('doctor data>>',data)
    return (
        <div>
            <h1 className="mt-5 mb-5 text-primary fw-bolder">{data[0]?.department} Docotrs</h1>
            <div className="medicinesStyle">
                {
                    data.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;