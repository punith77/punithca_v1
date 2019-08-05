import React from 'react';
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
    render() {
        return (

            <div className="section-footer">

                <div className="footer-wrapper">

                    <div className="social-container">

                        <a href="https://www.linkedin.com/in/punith-c-819883153/" target="_blank" className="icon"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/punith77" target="_blank" className="icon"><i className="fab fa-github"></i></a>
                        <Link to="/contact" className="icon"><i className="far fa-envelope"></i></Link>
                        <a href="https://www.facebook.com/profile.php?id=100001395347009" target="_blank" className="icon"><i className="fab fa-facebook-f"></i></a>
                    </div>

                </div>

                <p className="cp-text">Punith &copy; 2019</p>
            </div>
        )
    }
}