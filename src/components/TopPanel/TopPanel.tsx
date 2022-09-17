import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TopPanelMenu } from './TopPanelMenu';
import { TopPanelRecruiter } from './TopPanelRecruiter';


export const TopPanel = () => {
    const [show, setShow] = useState(false);
    const showMenu = () => {
        setShow(!show);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">

            <div className="container">

                <a className="navbar-brand" href="#">shyBBy.</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <ul className="navbar-nav mr-auto smooth-scroll">

                        <li className="nav-item">

                            <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>

                        </li>

                        <li className="nav-item">

                            <a className="nav-link" href="#about" data-offset="100">About</a>

                        </li>

                        <li className="nav-item">

                            <a className="nav-link" href="#skills" data-offset="100">Skills</a>

                        </li>

                        <li className="nav-item">

                            <a className="nav-link" href="#works" data-offset="100">Works</a>

                        </li>

                        <li className="nav-item">

                            <a className="nav-link" href="#contact" data-offset="100">Contact</a>

                        </li>

                    </ul>

                    <ul className="navbar-nav nav-flex-icons">

                        <li className="nav-item">

                            <a href="https://www.linkedin.com/in/dawid-olczak-6658a720a/" className="nav-link"><i
                                className="fab fa-linkedin light-green-text-2"></i></a>

                        </li>

                        <li className="nav-item">

                            <a href="https://github.com/shyBBy" className="nav-link" ><i
                                className="fab fa-github-square light-green-text-2"></i></a>

                        </li>

                        <li className="nav-item">

                            <a href="https://www.behance.net/edekkredekc94c" className="nav-link"><i
                                className="fab fa-behance-square light-green-text-2"></i></a>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
};