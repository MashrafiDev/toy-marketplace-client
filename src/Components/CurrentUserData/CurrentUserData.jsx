import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyData from '../MyData/MyData';
import useTitle from '../hooks/useTitle';

const CurrentUserData = () => {
    const { user } = useContext(AuthContext);
    const [currentUD, setCurrentUD] = useState([])
    const [defaultData, setDefaultData] = useState([])
    const [asData, setAsData] = useState([])
    const [desData, setDesData] = useState([])
    useTitle("PB | My Toys")

    const url = `http://localhost:3000/currentUD?sellerEmail=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCurrentUD(data)
            })
    }, [])

    const url1 = `http://localhost:3000/currentUD?sellerEmail=${user.email}`
    useEffect(() => {
        fetch(url1)
            .then(res => res.json())
            .then(data => {
                setDefaultData(data)
            })
    }, [])

    const url2 = `http://localhost:3000/ascendingToys?sellerEmail=${user.email}`
    useEffect(() => {
        fetch(url2)
            .then(res => res.json())
            .then(data => {
                setAsData(data)
            })
    }, [])
    const url3 = `http://localhost:3000/descendingToys?sellerEmail=${user.email}`
    useEffect(() => {
        fetch(url3)
            .then(res => res.json())
            .then(data => {
                setDesData(data)
            })
    }, [])
    const handlerDefault = () => {
        setCurrentUD(defaultData)
    }
    const handlerAs = () => {
        setCurrentUD(asData)
    }
    const handlerDes = () => {
        setCurrentUD(desData)
    }

    return (
        <div>
            <div className='flex'>
                <h3 className='flex-1 text-purple-400 mb-2 text-center font-bold text-4xl'>All My Toys</h3>
                <div className="dropdown flex justify-end me-20 mb-4">
                    <label tabIndex={0} className="btn m-1">Click</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={handlerDefault}><a>Default</a></li>
                        <li onClick={handlerAs}><a>Ascending</a></li>
                        <li onClick={handlerDes}><a>Descending Price</a></li>
                    </ul>
                </div>
            </div>
            <div className=" w-[90%] mx-auto mb-5 border rounded-2xl">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentUD.map(mToy => <MyData
                                key={mToy._id}
                                mToy={mToy}
                                dataU={currentUD}
                                setData={setCurrentUD}
                            ></MyData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CurrentUserData;