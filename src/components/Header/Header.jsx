import React, { use, useState } from 'react';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaRegUserCircle } from 'react-icons/fa';

const Header = ({ theme, setTheme }) => {

    const { user, LogOut, setUser } = use(AuthContext)

    const handleLogOut = () => {
        LogOut()
            .then(() => {
                toast("Log out successfully")
                setUser(null)
            })
            .catch(error => toast(error))
    }

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className='sticky top-0 z-50 bg-base-300 bg-opacity-95 backdrop-blur-sm shadow-md'>
            <div className='max-w-7xl mx-auto flex justify-between items-center p-4'>
                {/* Logo */}
                <div className="flex gap-2 items-center">
                    <img src={logo} alt="Logo" className='w-[40px]' />
                    <div>
                        <h2 className='text-2xl font-bold'>ROOMMATE</h2>
                        <p className='uppercase text-xs font-semibold text-gray-300'>
                            Find your Roommate
                        </p>
                    </div>
                </div>

                {/* Navbar Links */}
                <nav className="space-x-6 text-sm font-medium hidden md:flex">
                    <NavLink to="/" className="hover:text-secondary">Home</NavLink>
                    <NavLink to="/findRoommate" className="hover:text-secondary">Find Roommate</NavLink>
                    <NavLink to="/browseListing" className="hover:text-secondary">Browse Listing</NavLink>
                    <NavLink to="/my-listing" className="hover:text-secondary">My Listing</NavLink>
                </nav>

                {/* Auth Buttons */}
                <div className="space-x-4 hidden md:flex">
                    <div className="">
                        <button onClick={toggleTheme} className="btn btn-sm btn-primary">
                            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                        </button>
                    </div>
                    {
                        user ?
                            <div className="flex items-center gap-3">
                                <div className="">
                                    {
                                        <img className='w-[30px] h-[30px] rounded-full' src={user.photoURL ? user.photoURL : <FaRegUserCircle />} title={user.displayName} />

                                    }
                                </div>
                                <button onClick={handleLogOut} className='text-secondary py-1.5 px-6 text-sm rounded-2xl border border-secondary hover:bg-secondary hover:text-white transition'>LogOut</button>
                            </div>
                            :
                            <div>
                                <Link to={"/auth/signIn"} className='text-secondary py-1.5 px-6 text-sm rounded-2xl border border-secondary hover:bg-secondary hover:text-white transition'>
                                    Sign In
                                </Link>
                                <Link to={"/auth/register"} className='text-secondary py-1.5 px-6 text-sm rounded-2xl border border-secondary hover:bg-secondary hover:text-white transition'>
                                    Signup
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
