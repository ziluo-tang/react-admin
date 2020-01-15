import React, { PureComponent } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { message } from 'antd';
import Utils from '@/utils';

const { handleLocalStorage } = Utils;

export default class AuthRouter extends PureComponent{
    render() {
        const { component: Component, ...rest } = this.props;
        const isLogin = handleLocalStorage.get('user');
        if(!isLogin && this.props.path!='/login'){
            message.warning("登录信息过期，请重新登录！");
            handleLocalStorage.set('historyPath', this.props.path);
        }
        return (
            <Route {...rest} render={ props => {
                    return isLogin? <Component {...props}/> : <Redirect to="/login"/>
                }
            }/>
        );
    }
}