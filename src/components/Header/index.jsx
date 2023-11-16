import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Layout, Icon, Avatar, Popover, Menu, Modal } from 'antd'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Actions } from '@/store/action'
import Utils from '@/utils'
import avatar from '@/assets/author.jpg'
import './index.less'

const { Header } = Layout
const { Item, Divider } = Menu
const { handleLocalStorage } = Utils
export default
@connect(
  (state) => ({ collapsed: state.sliderToggle.collapsed }),
  (dispatch) => bindActionCreators(Actions, dispatch)
)
@withRouter
class extends Component {
  state = {}
  componentWillMount() {
    const userInfo = handleLocalStorage.get('user')
    if (userInfo) {
      this.setState({
        userName: userInfo.name,
      })
    }
  }
  toggle = () => {
    this.props.collapsedToggle(!this.props.collapsed)
  }
  menuClick = ({ key }) => {
    if (Number(key) === 2) {
      Modal.confirm({
        title: '是否退出?',
        okText: '确定',
        cancelText: '取消',
        centered: true,
        onOk: this.logout,
      })
    }
  }
  logout = () => {
    handleLocalStorage.removeItem('user')
    this.props.history.push('/login')
  }
  render() {
    return (
      <Header className="header">
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <Popover
          content={
            <Menu selectable={false} onClick={this.menuClick}>
              <Item key="0">个人信息</Item>
              <Divider></Divider>
              <Item key="1">系统设置</Item>
              <Divider></Divider>
              <Item key="2">退出登录</Item>
            </Menu>
          }
          placement="bottom"
          trigger="hover"
        >
          <span className="user">hi，{this.state.userName}</span>
          <Avatar src={avatar}></Avatar>
        </Popover>
      </Header>
    )
  }
}
