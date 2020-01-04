import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class NavLeft extends Component{
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName="active-router" to="/admin/home">home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active-router" to="/admin/context">Context</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active-router" to="/admin/lazy">Lazy & Suspense</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active-router" to="/admin/refs">Refs</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active-router" to="/order/detail">detail</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active-router" to="/login">logout</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}