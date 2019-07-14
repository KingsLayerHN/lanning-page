import React, { Component } from 'react';
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark media-xs-bg-dark font-weight-bold navbar-transparant navbar-absolute w-100">
                <div className="container">
                    <a className="navbar-brand" href="#">Robust.</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Overview</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown"
                                    id="dropdownMenu1" aria-haspopup="true"
                                    aria-expanded="false" href="">Pages
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="">Landing</a>
                                    <a className="dropdown-item" href="">Dashboard</a>
                                    <a className="dropdown-item" href="">General</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown"
                                    id="dropdownMenu2" aria-haspopup="true"
                                    aria-expanded="false" href="">Components
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="">Bootstrap</a>
                                    <a className="dropdown-item" href="">Robust</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown"
                                    id="dropdownMenu3" aria-haspopup="true"
                                    aria-expanded="false" href="">Docs
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="">Introduction</a>
                                    <a className="dropdown-item" href="">Quick Start</a>
                                    <a className="dropdown-item" href="">Build tools</a>
                                    <a className="dropdown-item" href="">Contents</a>
                                    <a className="dropdown-item" href="">Changelog</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-light font-weight-bold">Purchase Now</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}


export default Navbar;