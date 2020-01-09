import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';

export default class AuthRouter extends Component{
    render() {
        const { component: Component, ...rest } = this.props;
        const isLogin = localStorage.getItem('user');
        return (
            <Route {...rest} render={ props => {
                    return isLogin? <Component {...props}/> : <Redirect to="/login"/>
                }
            }/>
        );
    }
}