import React, { useState } from 'react';
import Swal from 'sweetalert2';

const MyData = ({ mToy, dataU, setData }) => {
    console.log(mToy);
    const {
        AvailableQuantity,
        toyName,
        toyPhoto,
        toyPrice,
        toyRating,
        toyDescription,
        _id,
    } = mToy;
    let details = toyDescription.slice(0, 40);
    const [modalOpen, setModalOpen] = useState(false);

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/toy/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                `Your ${toyName} has been deleted.`,
                                'success'
                            );
                            const remaining = dataU.filter((cof) => cof._id !== _id);
                            setData(remaining);
                        }
                    });
            }
        });
    };

    const updateHandler = (e) => {
        e.preventDefault();

        const form = e.target;

        const uPrice = form.uToyPrice.value;
        const uQuantity = form.uToyQuantity.value;
        const uDescription = form.uToyDetails.value;

        const updatedToy = { uPrice, uQuantity, uDescription };

        fetch(`http://localhost:3000/toy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedToy),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('updated');
                    setModalOpen(false);
                }
            });
    };

    return (
        <tr className="">
            <th>
                <img className="w-10" src={toyPhoto} alt="" />
            </th>
            <td>{toyName}</td>
            <td>{toyPrice}$</td>
            <td>{toyRating}</td>
            <td>{AvailableQuantity}</td>
            <td>{details}...</td>
            <td>
                <label htmlFor={_id} className="btn me-6">
                    Update
                </label>
                <input
                    type="checkbox"
                    id={_id}
                    className="modal-toggle"
                    checked={modalOpen}
                    onClick={() => setModalOpen(!modalOpen)}
                />
                <div className={`modal modal-bottom sm:modal-middle ${modalOpen ? 'modal-open' : ''}`}>
                    <form onSubmit={updateHandler} className="modal-box grid">
                        <h3 className="text-2xl mx-auto my-4">Update Form</h3>
                        <div>
                            <input
                                type="text"
                                name="uToyPrice"
                                placeholder="Enter Price"
                                className="input input-bordered w-[48%] max-w-xs me-4"
                            />
                            <input
                                type="number"
                                name="uToyQuantity"
                                placeholder="Enter Quantity"
                                className="input input-bordered w-[48%] max-w-xs me-4 mb-5"
                            />
                        </div>

                        <textarea
                            className="input input-bordered pt-2"
                            placeholder="Enter Description"
                            name="uToyDetails"
                            id=""
                            cols="30"
                            rows="10"
                        ></textarea>
                        <input className="w-[30%] btn mx-auto mt-3" type="submit" value="Update" />
                    </form>
                </div>
                <button onClick={() => handleDelete(_id)} className="btn">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default MyData;
