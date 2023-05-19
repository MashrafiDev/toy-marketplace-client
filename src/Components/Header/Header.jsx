import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import img from '../../img/My project (1).png'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const logOutHandler = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };

    return (
        <div className='w-4/5 mx-auto pt-2 bg-gradient-to-r from-purple-400 to-purple-800 mt-7 mb-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <div className="navbar bg-base-1 bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><ActiveLink to="/">Home</ActiveLink></li>
                            <li><ActiveLink to="/all-toys">All Toys</ActiveLink></li>
                            <li><ActiveLink to="/add-toys">Add Toys</ActiveLink></li>
                            <li><ActiveLink to="/my-toys">My Toys</ActiveLink></li>
                            <li><ActiveLink to="/about">About</ActiveLink></li>
                        </ul>
                    </div>

                    <div className='flex'>
                        <img className='w-10 me-2' src={img} alt="" />
                        <button>
                            <div>
                                <Link to="/">
                                    <p>Toy</p>
                                    <p>Thread</p>
                                </Link></div>
                        </button>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/all-toys">All Toys</Link></li>
                        <li><Link to="/add-toys">Add Toys</Link></li>
                        <li><Link to="/my-toys">My Toys</Link></li>
                        <li><Link to="/about">About</Link></li>
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
                        <Link onClick={logOutHandler} className="btn btn-outline btn-success" to="/">
                            Log Out
                        </Link>
                    ) : (
                        <>
                            <Link className="btn btn-outline btn-success me-4" to="/signUp">
                                SignUp
                            </Link>
                            <Link className="btn btn-outline btn-success" to="/login">
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
