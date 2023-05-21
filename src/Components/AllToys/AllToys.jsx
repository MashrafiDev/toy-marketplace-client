import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Toys from './Toys';
import useTitle from '../hooks/useTitle';

const AllToys = () => {
    const allToy = useLoaderData();
    const [toys, setToys] = useState([]);
    useTitle("PB | All Toy")

    useState(() => {
        if (allToy?.length > 20) {
            const result = allToy.slice(0, 20);
            setToys(result);
        } else {
            setToys(allToy);
        }
    }, [allToy]);

    return (
        <div className='my-6'>
            <h3 className='font-semibold text-4xl my-3 text-purple-400 text-center'>All Toy</h3>
            <div className="form-control mb-5">
                <div className="input-group justify-center">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <table className="table table-zebra w-[90%] mx-auto">
                <thead>
                    <tr>
                        <th className=''>Seller</th>
                        <th>Toy Name</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Sub Category</th>
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
