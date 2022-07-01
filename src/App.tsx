import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from 'antd'
import 'App.scss'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>APP组件<Button type="primary">Primary Button</Button></h2>
        <Outlet />
      </div>
    )
  }
}

