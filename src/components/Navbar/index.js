import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';



export default class Navbar extends React.Component {
    render() {
        return (
            <section className="section-navbar">
                <div className="navbar-wrapper">
                    <div className="logo">
                        <h1>Punith</h1>
                    </div>
                    <nav>
                        <ul className="nav-ul">

                            <li className="nav-li"><Link to="/">Home</Link></li>
                            <li className="nav-li"><Link to="/about">About</Link></li>

                            <li className="nav-li"><Link to="/projects">Portfolio</Link></li>
                            <li className="nav-li"><Link to="/contact">Contact</Link></li>
                            <li className="nav-li"><Link to="/login">Login</Link></li>

                        </ul>
                    </nav>
                </div>


            </section>
        )
    }
}