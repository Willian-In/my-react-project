import React, { Component } from 'react'
import LoginForm from 'components/LoginForm'
import 'styles/login.scss'
export default class Login extends Component {
  render() {
    return (
      <div className="login-wrap">
        <LoginForm />
        <div className="videocontainer">
          <video className="fullscreenvideo" muted src={require("./assets/mp4/loginVideo.mp4")} autoPlay loop></video>
        </div>
      </div>
    )
  }
}
