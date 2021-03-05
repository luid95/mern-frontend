import React from 'react';

const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/#">Videogame</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item ">
                            <a className="nav-link" href="/#">Home</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Search
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/#">Profile</a></li>
                                <li><a className="dropdown-item" href="/#">Login</a></li>
                                <div className="dropdown-divider"></div>
                                <li><a className="dropdown-item" href="/#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Profile</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/#">Login</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/#">Logout</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;