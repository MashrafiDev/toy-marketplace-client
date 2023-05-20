import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const allToy = useLoaderData()
    return (
        <div>
            <h2>{allToy.length}</h2>
        </div>
    );
};

export default AllToys;