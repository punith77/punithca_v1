import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (

            <div className="section-footer">

                <div className="footer-wrapper">

                    <div className="social-container">

                        <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="icon"><i className="fab fa-github"></i></a>
                        <a href="#" className="icon"><i className="fab fa-codepen"></i></a>
                        <a href="#" className="icon"><i className="far fa-envelope"></i></a>
                        <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
                    </div>

                </div>

                <p className="cp-text">&copy; Copyright 2019, Designed By Punith.</p>
            </div>
        )
    }
}