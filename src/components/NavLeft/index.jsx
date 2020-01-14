import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Icon } from "antd";
import menuConfig from "@/config/menuConfig.js";
import './index.less';

const { SubMenu, Item } = Menu;
class NavLeft extends Component{
    state = {}
    componentWillMount() {
        console.log(this.props);
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
                    <SubMenu title={
                                <span>
                                    { item.icon && <Icon type={ item.icon } /> }
                                    <span>{ item.title }</span>
                                </span>
                            } 
                            key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                );
            }
            return (
                <Item title={item.title} key={item.key}>
                    { item.isLevel ? 
                        <NavLink to={item.key}>
                            { item.icon && <Icon type={item.icon}/> }
                            <span>{item.title}</span>
                        </NavLink> 
                        : 
                        <span>
                            { item.icon && <Icon type={item.icon}/> }
                            <span>{item.title}</span>
                        </span> 
                    }
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