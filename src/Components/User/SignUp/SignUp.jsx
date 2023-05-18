import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    const [passEye, setPassEye] = useState(true);
    const [confirmPassEye, setConfirmPassEye] = useState(true);

    const handlePassEyeToggle = () => {
        setPassEye(!passEye);
    };

    const handleConfirmPassEyeToggle = () => {
        setConfirmPassEye(!confirmPassEye);
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h3 className="text-3xl text-center font-bold">Please Register</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" name="email" className="input input-bordered" />
                    </div>
                    <div className="form-control sticky">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={passEye ? 'text' : 'password'}
                            placeholder="password"
                            name="password"
                            className="input input-bordered"
                        />
                        <div onClick={handlePassEyeToggle} className="absolute left-72 top-14">
                            {passEye ? <FaEye /> : <FaEyeSlash />}
                        </div>
                    </div>
                    <div className="form-control sticky">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            type={confirmPassEye ? 'text' : 'password'}
                            placeholder="password"
                            name="confirm-password"
                            className="input input-bordered"
                        />
                        <div onClick={handleConfirmPassEyeToggle} className="absolute left-72 top-14">
                            {confirmPassEye ? <FaEye /> : <FaEyeSlash />}
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">image</span>
                        </label>
                        <input type="text" placeholder="Your Photo Url" name="image" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
