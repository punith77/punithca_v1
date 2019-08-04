import React from 'react';


export default class Login extends React.Component {
    render() {
        return (
            <div className="section-form">
                <div className="form-container-login">
                    <div className="section1">
                        <h3>Log in</h3>
                        <input placeholder="Username"></input>
                        <input placeholder="Password"></input>
                        <a href="#">Login</a>
                    </div>
                    <div className="section2">

                    </div>
                </div>

            </div>
        )

    }
}