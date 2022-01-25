import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useContext } from 'react'
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom'

const Nav = () => {
    const user = useContext(UserContext)
    console.log('nav', user)

    // We will use Link from react-router to replace all of our <a> anchor tags. "to" replaces all of our hrefs

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Pokepedia</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="pokemon/list">Pokemon List</Link>
                            </li>
                            {
                                !user
                                    ?
                                    <li className="nav-item">
                                        <Link className="nav-link" to="login">Login</Link>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <Link className="nav-link" to="favorites">Favorites</Link>
                                    </li>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
