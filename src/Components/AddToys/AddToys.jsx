import React from 'react';

const AddToys = () => {
    const addToyHandler = (e) => {
        e.preventDefault(); // Corrected the method name to preventDefault()
        const form = e.target;
        const toyName = form.toyName.value
        const toyPrice = form.toyPrice.value
        const toyPhoto = form.toyPhoto.value
        const sellerName = form.sellerName.value
        const sellerEmail = form.sellerEmail.value
        const toyRating = form.toyRating.value
        const AvailableQuantity = form.toyQuantity.value
        const toyDescription = form.toyDetails.value
        const toyCategory = form.toyCategory.value
        const addToy = { toyName, toyPrice, toyPhoto, sellerName, sellerEmail, toyRating, AvailableQuantity, toyDescription, toyCategory }

        fetch('http://localhost:3000/addToy', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('toy added successfully')
                    form.reset()
                }
            })
    };


    return (
        <div>
            <div className="mt-10">
                <div className="mx-auto max-w-2xl">
                    <div className="shadow-2xl ">
                        <form onSubmit={addToyHandler} className="flex justify-between border rounded-lg">
                            <div className="p-8 space-y-6">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='toyName'
                                        placeholder="Toy Name"
                                        className="w-full h-12 px-4 border rounded-lg input-bordered"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Toy Photo</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='toyPhoto'
                                        placeholder="Photo URL"
                                        className="w-full h-12 px-4 border rounded-lg input-bordered"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='sellerName'
                                        placeholder="Your Name"
                                        className="w-full h-12 px-4 border rounded-lg input-bordered"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='sellerEmail'
                                        placeholder="Your Email"
                                        className="w-full h-12 px-4 border rounded-lg input-bordered"
                                    />
                                </div>
                                <div>
                                    <input className='btn' type="submit" value="Add" />
                                </div>
                            </div>
                            <div className="p-8 space-y-6">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Toy Price</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='toyPrice'
                                        placeholder="Price"
                                        className="w-full h-12 px-4 border rounded-lg input-bordered"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Toy Rating</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='toyRating'
                                        placeholder="Rating"
                                        className="w-full h-12 px-4 border rounded-lg input-bordered"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='toyQuantity'
                                        placeholder="Quantity"
                                        className="w-full h-12 px-4 border rounded-lg input-bordered"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Toy Category</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='toyCategory'
                                        placeholder="Category Name"
                                        className="w-full h-12 px-4 border rounded-lg input-bordered"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Details Description</span>
                                    </label>
                                    <textarea className="pt-2 w-full h-12 px-4 border rounded-lg input-bordered" name="toyDetails" id="" cols="" rows="" placeholder='Toy Description'></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToys;
