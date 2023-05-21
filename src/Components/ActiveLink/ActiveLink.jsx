import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "text-purple-800 underline underline-offset-8" : ""}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;