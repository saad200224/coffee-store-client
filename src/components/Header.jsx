import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/users' >User</NavLink>
            <NavLink to='/signup' >Sign Up</NavLink>
            <NavLink to='/signin' >Sign In</NavLink>
        </div>
    );
};

export default Header;