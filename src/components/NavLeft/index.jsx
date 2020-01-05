import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from "antd";
import menuConfig from "@/config/menuConfig.js";

const { SubMenu } = Menu;
export default class NavLeft extends Component{
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
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>;
        });
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo.svg" alt="logo"/>
                    <h1>Admin</h1>
                </div>
                <nav>
                    { this.state.menuNodeTree }
                </nav>
            </div>
        );
    }
}