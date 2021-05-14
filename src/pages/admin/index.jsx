import React, { Component } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import NavLeft from '@/components/NavLeft'
import Header from '@/components/Header'

import './index.less'

const { Sider, Content, Footer } = Layout

export default
@connect((state) => ({ collapsed: state.sliderToggle.collapsed }))
class extends Component {
  state = {}
  render() {
    return (
      <Layout className="admin-wrapper">
        <Sider
          className="nav"
          trigger={null}
          collapsible
          collapsed={this.props.collapsed}
        >
          <NavLeft />
        </Sider>
        <Layout className="main-wrapper">
          <Header></Header>
          <Content className="content">{this.props.children}</Content>
          <Footer className="footer">
            Copyright © 2019 JonTang. All Rights Reserved. JonTang 版权所有
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
