import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="section-form">
                <div className="form-container">
                    <div className="section1"></div>
                    <div className="section2">
                        <h4>Leave a comment</h4>
                        <input placeholder="Your name"></input>
                        <input placeholder="Your Email"></input>
                        <textarea placeholder="Text here ..."></textarea>
                        <a href="#">Send</a>
                    </div>
                </div>

            </div>
        )
    }
}