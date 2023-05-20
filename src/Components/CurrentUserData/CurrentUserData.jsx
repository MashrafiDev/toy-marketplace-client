import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { data } from 'autoprefixer';
import MyData from '../MyData/MyData';

const CurrentUserData = () => {
    const { user } = useContext(AuthContext);
    const [currentUD, setCurrentUD] = useState([])

    const url = `http://localhost:3000/currentUD?sellerEmail=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCurrentUD(data)
            })
    }, [])
    return (
        <div>
            <div className=" w-[90%] mx-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Update And Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentUD.map(mToy => <MyData
                                key={mToy._id}
                                mToy={mToy}
                            ></MyData>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>company</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th>Favorite Color</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default CurrentUserData;