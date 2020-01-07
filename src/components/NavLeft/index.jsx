import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Icon } from "antd";
import { connect } from 'react-redux';
import menuConfig from "@/config/menuConfig.js";
import './index.less';

const { SubMenu, Item } = Menu;
class NavLeft extends Component{
    componentWillMount() {
        const menuNodeTree = this.renderMenu(menuConfig);
        this.setState({
            menuNodeTree,
            pathname: this.props.location.pathname
        });
    }
    renderMenu = (data) => {
        return data.map((item) => {
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                );
            }
            return (
                <Item title={item.title} key={item.key}>
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                </Item>
            );
        });
    }
    render() {
        return (
            <div className="nav-wrapper">
                <div className="logo">
                    <img src="/assets/logo.svg" alt="logo"/>
                    {this.props.collapsed? '' : <h1>Admin</h1>}
                </div>
                <Menu theme="dark" defaultSelectedKeys={[this.state.pathname]}>
                    { this.state.menuNodeTree }
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    collapsed: state.sliderToggle.collapsed
});

export default connect(mapStateToProps)(withRouter(NavLeft))