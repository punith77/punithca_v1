import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.png'



export default class Navbar extends React.Component {
    render() {
        return (
            <section className="section-navbar">
                <div className="navbar-wrapper">

                    <Link to="/"> <div className="logo">
                        <h3>PC</h3>
                        <p>Full-Stack Developer</p>
                        {/* <img src={Logo} alt="Navlogo"></img> */}
                    </div></Link>

                    <nav>
                        <ul className="nav-ul">

                            <li className="nav-li"><Link to="/">Home</Link></li>
                            <li className="nav-li"><Link to="/about">About</Link></li>
                            <li className="nav-li"><Link to="/contact">Contact</Link></li>
                            <li className="nav-li"><Link to="/projects">Portfolio</Link></li>

                            <li className="nav-li"><Link to="/login">Login</Link></li>

                        </ul>
                    </nav>
                </div>


            </section>
        )
    }
}