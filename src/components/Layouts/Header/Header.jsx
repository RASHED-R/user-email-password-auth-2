import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const menu = <>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " bg-blue-400 p-2 text-white rounded-lg" : ""
        }
            to={'/'}>Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " bg-blue-400 p-2 text-white rounded-lg" : ""
        }
            to={'/login'}>Login</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " bg-blue-400 p-2 text-white rounded-lg" : ""
        }
            to={'/register'}>Register</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {menu}

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;