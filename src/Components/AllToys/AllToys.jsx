import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Toys from './Toys';

const AllToys = () => {
    const allToy = useLoaderData();
    const [toys, setToys] = useState([]);

    useState(() => {
        if (allToy?.length > 20) {
            const result = allToy.slice(0, 20);
            setToys(result);
        } else {
            setToys(allToy);
        }
    }, [allToy]);

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
                    {toys.map(toy => (
                        <Toys
                            key={toy._id}
                            toy={toy}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;
