import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router';

const Header = () => {
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
                    <NavLink to="/find-roommate" className="hover:text-secondary">Find Roommate</NavLink>
                    <NavLink to="/browse-listing" className="hover:text-secondary">Browse Listing</NavLink>
                    <NavLink to="/my-listing" className="hover:text-secondary">My Listing</NavLink>
                </nav>

                {/* Auth Buttons */}
                <div className="space-x-4 hidden md:flex">
                    <button className='text-secondary py-1.5 px-6 text-sm rounded-2xl border border-secondary hover:bg-secondary hover:text-white transition'>
                        Sign In
                    </button>
                    <button className='text-secondary py-1.5 px-6 text-sm rounded-2xl border border-secondary hover:bg-secondary hover:text-white transition'>
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
