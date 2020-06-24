import React from 'react';
import './Nav.css'

export const Nav = () => {

    return (
        <div className='nav'>
            <h2 className="logo">STREETWISE</h2>
            <div className="nav-links">
                <a href="/" className="navEl label">Home</a>
                <a href="/resources" className="navEl label">Resources</a>
            </div>
        </div>
    )
}