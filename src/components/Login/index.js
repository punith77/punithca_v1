import React from "react";

export default class Login extends React.Component {
  render() {
    return (
      <div className='section-form'>
        <div className='login-container'>
          <div className='login-left'>
            <h2>Log in</h2>
            <input placeholder='Username'></input>
            <input placeholder='Password'></input>
            <div className='btn-container'>
              <a href='#' className='btn'>
                <i class='fas fa-sign-in-alt'></i>Log in
              </a>
            </div>
          </div>
          <div className='login-right'>
            <h1>Admin Access Only</h1>
            <i class='fas fa-user-shield'></i>
          </div>
        </div>
      </div>
    );
  }
}
