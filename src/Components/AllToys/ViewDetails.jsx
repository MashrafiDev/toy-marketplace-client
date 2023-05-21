import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const viewData = useLoaderData();
    const {
        AvailableQuantity,
        toyDescription,
        sellerEmail,
        toyCategory,
        sellerName,
        toyName,
        toyPhoto,
        toyPrice,
        toyRating,
        _id } = viewData

    return (
        <div className="card lg:card-side bg-base-100 w-[80%] mx-auto">
            <figure><img className='' src={toyPhoto} alt="Album" /></figure>
            <div className="card-body my-auto">
                <p className="lg:ms-10">{toyName}</p>
                <p className="lg:ms-10 ">{sellerName}</p>
                <p className="lg:ms-10">{sellerEmail}</p>
                <p className="lg:ms-10">{toyCategory}</p>
                <p className="lg:ms-10">{toyPrice}</p>
                <p className="lg:ms-10">{AvailableQuantity}</p>
                <p className="lg:ms-10">{toyRating}</p>
                <p className="lg:ms-10">{toyDescription}</p>

            </div>
        </div>
    );
};

export default ViewDetails;
