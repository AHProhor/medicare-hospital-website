import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([])

    useEffect( ()=>{
        fetch('department.json')
        .then(response => response.json())
        .then(data => setServices(data))
    },[])


    return (
        <div>
            <h1 className="mt-5 mb-5 text-primary fw-bolder">Departments</h1>
              <div className="departmentStyle">
                  {
                      services.map(service => <Service
                        key = {service.id}
                        sendService ={service}
                      ></Service>)
                  }
              </div>
        </div>
    );
};

export default Services;