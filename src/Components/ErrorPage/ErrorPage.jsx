import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const ErrorPage = () => {

    const history = useNavigate();
    return (
        <div className='text-center mt-7'>
            <Link className=' me-5' to="/">Back to Home</Link>
            <Link className='' onClick={() => history(-1)}> Go Back</Link >
            <img className='mx-auto lg:w-[70%] mt-8' src="https://i.ibb.co/j5zfb50/404-fon-error-404-not-found-wallpaper-preview.jpg" alt="" />
        </div >
    );
};

export default ErrorPage;