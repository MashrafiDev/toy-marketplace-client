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
                <h3>{toyCategory}</h3>
            </td>
            <td>
                {toyPrice}
            </td>
            <td>
                {AvailableQuantity}
            </td>
            <td>
                <Link to={`/viewDetails/${_id}`} className='btn' >View Details</Link>
            </td>
        </tr>
    );
};

export default Toys;