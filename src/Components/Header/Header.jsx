import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);

    const logOutHandler = () => {
        logOut()
            .then(result => {
                console.log(result.user);
                toast.success('LogOut Success', {
                    position: toast.POSITION.TOP_CENTER
                })
            })
            .catch(error => {
                const errorMessage = error.message;
            });
    };

    return (
        <div className='w-4/5 mx-auto pt-2 bg-gradient-to-r from-purple-400 to-purple-800 mt-7 mb-5 shadow-[0_35px_80px_-15px_rgba(0,0,0,0.3)]'>
            <div className="navbar bg-base-1 bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='mx-4 subpixel-antialiased font-medium text-black'><ActiveLink to="/">Home</ActiveLink></li>
                            <li className='mx-4 subpixel-antialiased font-medium text-black'><ActiveLink to="/all-toys">All Toys</ActiveLink></li>
                            <li className='mx-4 subpixel-antialiased font-medium text-black'><ActiveLink to="/add-toys">Add Toys</ActiveLink></li>
                            <li className='mx-4 subpixel-antialiased font-medium text-black'><ActiveLink to="/my-toys">My Toys</ActiveLink></li>
                            <li className='mx-4 subpixel-antialiased font-medium text-black'><ActiveLink to="/blog">Blog</ActiveLink></li>
                        </ul>
                    </div>


                    <Link to="/"><img className=' me-2' src="https://i.ibb.co/CBWQ7L8/cropped-Group-74-2x.png" alt="" /></Link>



                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                        <li className='mx-4 subpixel-antialiased font-medium text-black'><ActiveLink to="/">Home</ActiveLink></li>
                        <li className='mx-4 subpixel-antialiased font-medium text-black'><ActiveLink to="/all-toys">All Toys</ActiveLink></li>
                        <li className='mx-4 subpixel-antialiased font-medium text-black'><ActiveLink to="/add-toys">Add Toys</ActiveLink></li>
                        <li className='mx-4 subpixel-antialiased font-medium text-black'><ActiveLink to="/my-toys">My Toys</ActiveLink></li>
                        <li className='mx-4 subpixel-antialiased font-medium text-black'><ActiveLink to="/blog">Blog</ActiveLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        user.photoURL ? (
                            <img title={user.displayName} className="w-20 h-14 me-4" src={user.photoURL} alt="" />
                        ) : (
                            <img title={user.displayName} className="w-12 h-10 rounded me-4" src="https://i.ibb.co/sKTQF8s/download.png" alt="" />
                        )
                    ) : null}
                    {user ? (
                        <Link onClick={logOutHandler} className="bg-gradient-to-r from-purple-800 to-purple-400 rounded-[50px] px-4 py-2 text-white" to="/">
                            Log Out
                        </Link>
                    ) : (
                        <>
                            <Link className="bg-gradient-to-r from-purple-800 to-purple-400 rounded-[50px] px-4 py-2 text-white me-4" to="/signUp">
                                SignUp
                            </Link>
                            <Link className="bg-gradient-to-r from-purple-800 to-purple-400 rounded-[50px] px-4 py-2 text-white" to="/login">
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Header;
