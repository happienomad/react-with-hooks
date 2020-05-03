import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul className="flex row">
                    <li>
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/form" activeClassName="active">Form</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;