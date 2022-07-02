import React, { Component } from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './scss/loginForm.scss'

export default class LoginForm extends Component {

  // 处理登录逻辑
  handleSubmit = () => {
    console.log(1231313);
  }
  render() {
    return (
      <form  className="login-form" onSubmit={this.handleSubmit}>
        <h1>登录</h1>
        <div className="input-box">
          <div className="input-text">
            <UserOutlined style={{color: '#fff', fontSize: "28px", height: "2.25rem"}}/>
            <input type="text" placeholder="用户名"/>
          </div>
          <div className="input-text">
            <LockOutlined style={{color: '#fff', fontSize: "28px", verticalAlign: "middle"}}/>
            <input type="password" placeholder="密码"/>
          </div>
          <div className="input-btn">
            登录
          </div>
          <div className="sing-up">
            还没账户？<span>立即注册</span>
          </div>
        </div>
        
      </form>
    )
  }
}
