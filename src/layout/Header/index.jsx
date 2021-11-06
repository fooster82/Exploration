import React from "react";
import { NavLink } from 'react-router-dom';
import './style.css';

export const Header = () => {
    return (
        <nav>
            <NavLink exact to="/">Start again</NavLink>
        </nav>
    )
}