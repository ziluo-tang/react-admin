import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AuthRoute from '@/components/AuthRouter';
import App from '@/App';
import Admin from '@/pages/admin';
import Login from '@/pages/login';
import Home from '@/pages/home';
import CTable from '@/pages/table';
import CModal from '@/pages/modal';
import CForm from '@/pages/form';
import City from '@/pages/city';
import Order from '@/pages/order';
import CMap from '@/pages/map';
import User from '@/pages/user';
import Config from '@/pages/config'
import Detail from '@/pages/detail';
import NoMatch from '@/pages/noMatch';

export default class IRouter extends Component{
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Redirect exact from="/" to="/admin/home"/>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/admin" render={() =>
                            <Admin>
                                <Switch>
                                    <AuthRoute path="/admin/home" component={Home}></AuthRoute>
                                    <AuthRoute path="/admin/ui/table" component={CTable}></AuthRoute>
                                    <AuthRoute path="/admin/ui/modal" component={CModal}></AuthRoute>
                                    <AuthRoute path="/admin/ui/form" component={CForm}></AuthRoute>
                                    <AuthRoute path="/admin/city" component={City}></AuthRoute>
                                    <AuthRoute path="/admin/order" component={Order}></AuthRoute>
                                    <AuthRoute path="/admin/map" component={CMap}></AuthRoute>
                                    <AuthRoute path="/admin/user" component={User}></AuthRoute>
                                    <AuthRoute path="/admin/config" component={Config}></AuthRoute>
                                    <AuthRoute component={NoMatch}></AuthRoute>
                                </Switch>
                            </Admin>}>
                        </Route>
                        <Route exact path="/order/detail" component={Detail}></Route>
                    </Switch>
                </App>
            </Router>
        );
    }
} 