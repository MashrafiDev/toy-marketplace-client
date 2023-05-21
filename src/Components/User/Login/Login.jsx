import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const [passEye, setPassEye] = useState(true);
    const [error, setError] = useState('')
    const [viaError, setViaError] = useState('')
    useTitle("Pb | LogIn")
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { logInUser, googleSignIn, githubSignIn } = useContext(AuthContext)
    const handlePassEyeToggle = () => {
        setPassEye(!passEye);
    };
    const loginHandler = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        console.log(event)

        logInUser(email, password)
            .then((logIn) => {
                const user = logIn.user
                console.log(user)
                event.target.reset()
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMassage = error.message
                setError(errorMassage)
                console.log(error)
            })
    }

    const googleSignInHandler = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setViaError(error.message)
            })
    }

    const githubSignInHandler = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setViaError(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body ">
                    <form onSubmit={loginHandler}>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className='flex'>
                                <div onClick={googleSignInHandler} className=' flex-1 flex justify-center items-center mb-4'>
                                    <button className='bg-white btn  hover:bg-white'>
                                        <img className='w-10 me-4' src="https://i.ibb.co/hCmDtQt/images-removebg-preview.png" alt="" /> <h4 className='text-black font-bold'>Google</h4>
                                    </button>
                                </div>
                                <div onClick={githubSignInHandler} className=' flex justify-center items-center mb-4'>
                                    <button className='bg-white btn  hover:bg-white'>
                                        <img className='w-10 me-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZCYmiGYsRcLuenmPaLZRJs2vQMkTK8b4XeoOLpYtGQ&" alt="" /><h4 className='text-black font-bold'>Github</h4>
                                    </button>
                                </div>
                            </div>
                            <span className='font-semibold text-red-600 ms-3'>{viaError}</span>
                            <div className="divider">OR</div>
                        </div>
                        <h3 className="text-3xl text-center font-bold">Please Login</h3>
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
                                {passEye ? <FaEyeSlash /> : <FaEye />}
                            </div>
                            <span className='font-semibold text-red-600 mt-3'>{error}</span>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Login" />

                        </div>
                        <p className='mt-3'>Toy Thread New? <Link className='link' to="/signUp">Create An Account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
