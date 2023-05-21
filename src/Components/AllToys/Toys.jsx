import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({ toy }) => {
    console.log(toy)
    const {
        AvailableQuantity,
        toyCategory,
        toyPrice,
        _id,
        toyName,
        sellerName
    } = toy;

    return (
        <tr>
            <td>
                <h3>{sellerName}</h3>
            </td>
            <td>
                <h3>{toyName}</h3>
            </td>
            <td>
                {toyPrice}
            </td>
            <td>
                {AvailableQuantity} psc
            </td>
            <td>
                <h3>{toyCategory}</h3>
            </td>
            <td>
                <Link to={`/viewDetails/${_id}`} className='bg-gradient-to-r from-purple-800 to-purple-400 rounded-[50px] px-4 py-2 text-white' >View Details</Link>
            </td>
        </tr>
    );
};

export default Toys;