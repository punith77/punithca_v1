import React from 'react';

import MyImage from '../../images/myImage2.jpg';
import { Link } from 'react-router-dom';

export default class About extends React.Component {
    render() {
        return (
            <div className="section-about">


                <div className="about-wrapper">
                    <div className="about-left">
                        <img src={MyImage} alt="profile-dp" className="about-img" />
                        <h2 className="about-name">Punith Chirumamilla</h2>
                        <h4 className="about-position">Full Stack Developer</h4>

                    </div>

                    <div className="about-right">
                        <div className="about-me">
                            <h1>Hi there...</h1>
                            <p>I am an allround web developer. I am a senior programmer with good knowledge of front-end and back-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.</p>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}