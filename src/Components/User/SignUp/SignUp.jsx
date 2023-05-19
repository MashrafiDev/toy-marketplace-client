import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [passEye, setPassEye] = useState(true);
    const [confirmPassEye, setConfirmPassEye] = useState(true);
    const [error, setError] = useState()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const handlePassEyeToggle = () => {
        setPassEye(!passEye);
    };

    const handleConfirmPassEyeToggle = () => {
        setConfirmPassEye(!confirmPassEye);
    };
    const signUpHandler = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirm.value;
        const photoURL = event.target.image.value
        console.log(name, email, password, confirmPassword, photoURL)
        console.log(event)

        if (password !== confirmPassword) {
            setError('Confirm Password does not match')
            return;
        }
        else if (password.length < 6) {
            setError('Password must be at least 6 characters long')
            return;
        }

        createUser(email, password)
            .then((result) => {
                updateUserProfile(name, photoURL)
                const user = result.user
                console.log(user)
                event.target.reset()
                navigate('/')
            })
            .catch((error) => {
                const errorMassage = error.message;
                setErrorSign(errorMassage)
            })

    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body ">
                    <form onSubmit={signUpHandler}>
                        <h3 className="text-3xl text-center font-bold">Please Register</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
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
                                required
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
                                name="confirm"
                                className="input input-bordered"
                                required
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
                            <input className='btn btn-primary' type="submit" value="Sign Up" />
                            <span>{error}</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
