import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import 'App.scss'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>APP组件</h2>
        <Outlet />
      </div>
    )
  }
}

