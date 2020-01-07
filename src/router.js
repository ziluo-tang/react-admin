import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
const App = lazy(() => import('@/App'));
const Login = lazy(() => import('@/pages/login'));
const Admin = lazy(() => import('@/pages/admin'));
const Detail = lazy(() => import('@/pages/detail'));
const NoMatch = lazy(() => import('@/pages/noMatch'));
const Home = lazy(() => import('@/pages/home'));
const CTable = lazy(() => import('@/pages/table'));
const CModal = lazy(() => import('@/pages/modal'));
const CForm = lazy(() => import('@/pages/form'));
const City = lazy(() => import('@/pages/city'));
const Order = lazy(() => import('@/pages/order'));
const CMap = lazy(() => import('@/pages/map'));
const User = lazy(() => import('@/pages/user'));
const Config = lazy(() => import('@/pages/config'));

export default class IRouter extends Component{
    render() {
        return (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
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
                </Suspense>
            </Router>
        );
    }
} 