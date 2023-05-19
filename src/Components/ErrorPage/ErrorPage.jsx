import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const ErrorPage = () => {

    const history = useNavigate();
    return (
        <div className='text-center mt-7'>
            <Link className=' me-5' to="/">Back to Home</Link>
            <Link className='' onClick={() => history(-1)}> Go Back</Link >
            <img className='mx-auto' src="https://i.ibb.co/b5mwnFb/1-z-E2qn-VTJehut7-B8-P2a-Mn3-A.gif" alt="" />
        </div >
    );
};

export default ErrorPage;