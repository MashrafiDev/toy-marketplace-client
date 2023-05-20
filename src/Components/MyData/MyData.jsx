import React from 'react';

const MyData = ({ mToy }) => {
    console.log(mToy)
    const { AvailableQuantity,
        toyCategory,
        toyName,
        toyPhoto,
        toyPrice,
        toyRating,
        toyDescription } = mToy
    let details = toyDescription.slice(0, 40)

    return (
        <tr className=''>
            <th><img className='w-10' src={toyPhoto} alt="" /></th>
            <td>{toyName}</td>
            <td>{toyPrice}</td>
            <td>{toyRating}</td>
            <td>{AvailableQuantity}</td>
            <td>{details}</td>
            <td><button>Update</button> <button>Delete</button></td>
        </tr>
    );
};

export default MyData;