import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="section-form">
                <div className="form-container">
                    <div className="form-left">
                        <div className="form-left-content">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h2>Address</h2>
                                <p>35 Cornerstone Avenue NE <br />Calgary, Alberta, T3N1G7</p>
                            </div>

                        </div>
                        <div className="form-left-content">
                            <i class="fas fa-phone-alt"></i>
                            <div>
                                <h3>Lets Talk</h3>
                                <p>+1 306-515-1575</p>
                            </div>

                        </div>
                        <div className="form-left-content">
                            <i class="far fa-envelope"></i>
                            <div>
                                <h3>Drop a Email</h3>
                                <p>info@punith.ca</p>
                            </div>

                        </div>


                    </div>
                    <div className="form-right">
                        <h2>Leave a comment</h2>
                        <input placeholder="Your name"></input>
                        <input placeholder="Your Email"></input>
                        <textarea placeholder="Text here ..."></textarea>
                        <div className="btn-container">
                            <a href="#" className="btn"><i class="far fa-envelope"></i>Send</a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}