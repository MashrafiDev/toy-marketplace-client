import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Toys from './Toys';

const AllToys = () => {
    const allToy = useLoaderData()
    return (
        <div className=''>
            <table className="table table-zebra w-[90%] mx-auto">
                <thead>
                    <tr>
                        <th className=''>Seller</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allToy.map(toy => <Toys
                            key={toy._id}
                            toy={toy}
                        ></Toys>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;