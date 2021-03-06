import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://enigmatic-garden-15822.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
            <h2>Details of: {service.name}</h2>
            <h3>This is booking: {serviceId}</h3>
        </div>
    );
};

export default Booking;