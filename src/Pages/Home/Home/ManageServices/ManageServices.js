import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://car-mechanics-server-ef4b.onrender.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = id => {
        const url = `https://car-mechanics-server-ef4b.onrender.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('data has been deleded')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }

    return (
        <div>
            <h2>Manage Services</h2>

            {
                services.map((service) => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;