import React, { useEffect, useState } from 'react';
import TotallDoctor from '../TotallDoctor/TotallDoctor';
import './TotallDoctors.css';
const TotallDoctors = () => {
    const [allDoctors, setallDoctors] = useState([]);
    useEffect(()=>{
        fetch('/doctors.json')
        .then(response => response.json())
        .then(data => setallDoctors(data));
    },[])
    return (
        <div>
            <h1 className="mt-5 mb-5 text-primary fw-bolder">Docotrs</h1>
            <div className="totallDoctorsStyle">
                {
                    allDoctors.map(doctor => <TotallDoctor
                    key={doctor.id}
                    doctor={doctor}
                    ></TotallDoctor>)
                }
            </div>
        </div>
    );
};

export default TotallDoctors;