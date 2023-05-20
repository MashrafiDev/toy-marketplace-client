import React from 'react';

const Unicorn_Toy = ({ unicorn }) => {
    const { Name, Picture, Price, Rating } = unicorn

    console.log(unicorn)
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-52' src={Picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Name}</h2>
                    <p>Price: {Price}</p>
                    <p>Rating: {Rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Unicorn_Toy;