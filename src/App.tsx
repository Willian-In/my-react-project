import React, { Component } from 'react'
// import { Outlet } from 'react-router-dom'
import { Breadcrumb, Layout } from 'antd';
import LayoutHeader from 'components/layout/LayoutHeader';
import LayoutSiderMenu from 'components/layout/LayoutSiderMenu'


import 'App.scss'
const { Content } = Layout;

export default class App extends Component {
  render() {
    return (
      <Layout className='container'>
        <LayoutHeader />
        <Layout>
          <LayoutSiderMenu />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
        {/* <Outlet /> */}
      </Layout>
    )
  }
}



