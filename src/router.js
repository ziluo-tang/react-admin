import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
const App = lazy(() => import('./App'));
const Login = lazy(() => import('./pages/login'));
const Admin = lazy(() => import('./pages/admin'));
const Detail = lazy(() => import('./pages/detail'));
const NoMatch = lazy(() => import('./pages/noMatch'));
const Home = lazy(() => import('./components/Home'));
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