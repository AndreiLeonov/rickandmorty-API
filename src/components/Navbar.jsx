import React from 'react';
import style from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    return (
        <div className={style.Nav}>
            <Link to={`/characters/`}>
                <img src={"https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png"} />
            </Link>
            {/* <Link style={{ textDecoration: 'none', color: '#fff' }} to={`/characters/`}>[All Persons]</Link>
            <Link style={{ textDecoration: 'none', color: '#fff' }} to={`/characters/`}>[Episodes]</Link> */}
        </div>
    );

}