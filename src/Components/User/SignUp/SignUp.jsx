import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [passEye, setPassEye] = useState(true);
    const [confirmPassEye, setConfirmPassEye] = useState(true);
    const [pass, setPass] = useState('')
    const [coPass, setCoPass] = useState('')
    const [error, setError] = useState('')
    const [isUser, setIsUser] = useState('')
    useTitle(" TS| SignUp")
    const { createUser, updateUserProfile, googleSignUp, githubSignUp } = useContext(AuthContext)
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

        if (password.length < 6) {
            setPass('Password must be at least 6 characters long')
            return;
        }
        else if (password !== confirmPassword) {
            setCoPass('Confirm Password does not match')
            return;
        }


        createUser(email, password)
            .then((result) => {
                updateUserProfile(name, photoURL)
                const user = result.user
                toast.success('SignUp Success', {
                    position: toast.POSITION.TOP_RIGHT
                })
                console.log(user)
                event.target.reset()
                navigate('/')
            })
            .catch((error) => {
                const errorMassage = error.message;
                setIsUser(errorMassage)
            })
    }


    const googleSignUpHandler = () => {
        googleSignUp()
            .then(result => {
                const user = result.user
                toast.success('SignUp Success', {
                    position: toast.POSITION.TOP_RIGHT
                })
                console.log(user)
                navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    const githubSignUpHandler = () => {
        githubSignUp()
            .then(result => {
                const user = result.user
                toast.success('SignUp Success', {
                    position: toast.POSITION.TOP_RIGHT
                })
                console.log(user)
                navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body ">
                    <form onSubmit={signUpHandler}>
                        <div className=" w-full border-opacity-50">
                            <div className='flex'>
                                <div onClick={googleSignUpHandler} className=' flex-1 flex justify-center items-center mb-4'>
                                    <button className='bg-white btn  hover:bg-white'>
                                        <img className='w-10 me-4' src="https://i.ibb.co/hCmDtQt/images-removebg-preview.png" alt="" /><h4 className='text-black font-bold'> Google</h4>
                                    </button>
                                </div>
                                <div onClick={githubSignUpHandler} className='flex justify-center items-center mb-4'>
                                    <button className='bg-white btn hover:bg-white'>
                                        <img className='w-10 me-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZCYmiGYsRcLuenmPaLZRJs2vQMkTK8b4XeoOLpYtGQ&s" alt="" /> <h4 className='text-black'>Github</h4>
                                    </button>
                                </div>
                            </div>
                            <h3 className='font-semibold text-red-600'>{error}</h3>
                            <div className="divider">OR</div>
                        </div>
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
                            <h3 className='font-semibold text-red-600 mt-2'>{isUser}</h3>
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
                            <h3 className='font-semibold text-red-600 mt-2'>{pass}</h3>
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
                                {confirmPassEye ? <FaEyeSlash /> : <FaEye />}
                            </div>
                            <h3 className='font-semibold text-red-600 mt-2'>{coPass}</h3>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">image</span>
                            </label>
                            <input type="text" placeholder="Your Photo Url" name="image" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Sign Up" />
                        </div>
                        <p className='mt-3 ms-1'>Already Account? <Link to="/login" className='link'>Login</Link></p>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
