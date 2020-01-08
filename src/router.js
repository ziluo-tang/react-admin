import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
                                    <Route path="/admin/home" component={Home}></Route>
                                    <Route path="/admin/ui/table" component={CTable}></Route>
                                    <Route path="/admin/ui/modal" component={CModal}></Route>
                                    <Route path="/admin/ui/form" component={CForm}></Route>
                                    <Route path="/admin/city" component={City}></Route>
                                    <Route path="/admin/order" component={Order}></Route>
                                    <Route path="/admin/map" component={CMap}></Route>
                                    <Route path="/admin/user" component={User}></Route>
                                    <Route path="/admin/config" component={Config}></Route>
                                    <Route component={NoMatch}></Route>
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