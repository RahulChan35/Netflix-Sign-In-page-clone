import React from 'react'
import backgroundImage from '../assets/background_image.jpg'

const SignIn = () => {
  return (
    <div className="container">
      <img
        src={backgroundImage}
        style={{ width: '100%' }}
        className="background-image"
      />
      <h1 className="logo">NETFLIX</h1>
      <div className="form-container">
        <form className="signin-form">
          <h1 className="form-heading">Sign In</h1>
          <div className="input-container">
            <input
              className="input-field"
              type="email"
              placeholder="Email or phone number"
            />
            <input
              className="input-field"
              type="password"
              placeholder="Password"
            />
          </div>
          <input className="signin-btn" type="button" value="Sign In" />
          <div className="form-footer">
            <div>
              <input type="checkbox" />
              Remember me
            </div>
            <div>
              <p>Need Help?</p>
            </div>
          </div>
          <div className="extra-info">
            <p>
              New to Netflix? <p className="signup">Sign Up now</p>
            </p>
            <p className="learn-more">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="#">Learn more.</a>
            </p>
          </div>
        </form>
      </div>
      <footer className="signin-footer"></footer>
    </div>
  )
}

export default SignIn
