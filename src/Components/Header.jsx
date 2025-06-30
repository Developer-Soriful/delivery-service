import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../public/assets/logo.png'
const navLinks = [
    { to: '/services', label: 'Services' },
    { to: '/coverage', label: 'Coverage' },
    { to: '/about', label: 'About Us' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/be-a-rider', label: 'Be a Rider', special: true },
];

const Header = () => {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-white rounded-2xl my-8 shadow-sm w-full">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div>
                <img src={logo} alt="" />
              </div>
                <span className="font-bold text-2xl text-gray-800 ml-1">Profast</span>
            </div>

            {/* Navigation */}
            <nav className="flex gap-8">
                {navLinks.map(link => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            link.special
                                ? `text-gray-500 font-normal border-2 border-lime-400 rounded px-2 py-0.5 hover:bg-lime-100 transition${isActive ? ' bg-lime-100 border-lime-600 text-gray-900' : ''}`
                                : `text-gray-500 font-normal hover:text-gray-800 transition${isActive ? ' text-gray-900 font-semibold' : ''}`
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-4">
                <button className="px-7 py-2 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-medium text-base hover:bg-gray-50 transition">Sign In</button>
                <button className="px-7 py-2.5 rounded-xl bg-lime-200 text-gray-900 font-bold text-base hover:bg-lime-300 transition">Be a rider</button>
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-lime-200 text-xl font-bold -rotate-45 inline-block">↗</span>
                </div>
            </div>
        </header>
    );
};

export default Header;