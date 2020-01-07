import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'react-redux';
import { sliderToggle } from '@/store/action';
import './index.less';

const { Header } = Layout;
class CHeader extends Component{
    state = {}
    componentDidMount() {
        this.setState({
            userName: 'JonTang'
        });
    }
    toggle = () => {
        this.props.dispatch(sliderToggle(!this.state.collapsed));
        this.setState({
            collapsed: !this.state.collapsed
        });
        
    }
    render() {
        return (
            <Header className="header">
                 <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle}/>
            </Header>
        )
    }
}

export default connect()(CHeader)