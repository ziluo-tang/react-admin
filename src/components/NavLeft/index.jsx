import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from "antd";
import { connect } from 'react-redux';
import menuConfig from "@/config/menuConfig.js";
import './index.less';

const { SubMenu, Item } = Menu;
class NavLeft extends Component{
    componentWillMount() {
        const menuNodeTree = this.renderMenu(menuConfig);
        this.setState({
            menuNodeTree
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
                    {item.title}
                </Item>
            );
        });
    }
    render() {
        return (
            <div className="nav-wrapper">
                <div className="logo">
                    <img className={this.props.collapsed? "logo-small" : "logo-large"} src="/assets/logo.svg" alt="logo"/>
                    <h1>{this.props.collapsed?'': 'Admin'}</h1>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['/admin/home']}>
                    { this.state.menuNodeTree }
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    collapsed: state.sliderToggle.collapsed
});

export default connect(mapStateToProps)(NavLeft)