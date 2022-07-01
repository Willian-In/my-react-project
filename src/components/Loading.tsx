import React, { Component } from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import './scss/Loading.scss'

export default class Loading extends Component {
  render() {
    return (
      <div className='loading-wrap'>
        <LoadingOutlined style={{color: '#40a9ff', fontSize: '66px'}}/>
      </div>
    )
  }
}
