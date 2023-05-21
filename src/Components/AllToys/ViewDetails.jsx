import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const ViewDetails = () => {
    const viewData = useLoaderData();
    useTitle("PB | Details")
    const {
        AvailableQuantity,
        toyDescription,
        sellerEmail,
        sellerName,
        toyName,
        toyPhoto,
        toyPrice,
        toyRating,
        _id } = viewData

    return (
        <div className="card lg:card-side bg-base-100 w-[80%] mx-auto my-8">
            <figure><img className='' src={toyPhoto} alt="Album" /></figure>
            <div className="card-body my-auto">
                <p className="lg:ms-10 text-black">
                    Toy Name: <span className='text-lg'>{toyName}</span>
                </p>
                <p className="lg:ms-10 text-black">Seller Name: <span className='text-lg'>{sellerName}</span></p>
                <p className="lg:ms-10 text-black">Seller Email: <span className='text-lg'>{sellerEmail}</span></p>
                <p className="lg:ms-10 text-black">Toy Price: <span className='text-lg'>{toyPrice}</span></p>
                <p className="lg:ms-10 text-black">Available Quantity: <span className='text-lg'>{AvailableQuantity}</span></p>
                <p className="lg:ms-10 text-black"> Rating: {toyRating}</p>
                <p className="lg:ms-10 text-black">Description: <span className='text-lg'>{toyDescription}</span></p>

            </div>
        </div>
    );
};

export default ViewDetails;
