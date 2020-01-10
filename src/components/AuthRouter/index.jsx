import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import Utils from '@/utils';

const { handleLocalStorage } = Utils;

export default class AuthRouter extends Component{
    render() {
        const { component: Component, ...rest } = this.props;
        const isLogin = handleLocalStorage.get('user');
        return (
            <Route {...rest} render={ props => {
                    return isLogin? <Component {...props}/> : <Redirect to="/login"/>
                }
            }/>
        );
    }
}