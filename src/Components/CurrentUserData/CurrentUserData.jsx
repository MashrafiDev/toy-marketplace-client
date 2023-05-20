import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { data } from 'autoprefixer';

const CurrentUserData = () => {
    const { user } = useContext(AuthContext);
    const [currentUD, setCurrentUD] = useState([])

    const url = `http://localhost:3000/currentUD?sellerEmail=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default CurrentUserData;