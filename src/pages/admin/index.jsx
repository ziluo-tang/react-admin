import React, { Component } from 'react';
import NavLeft from '@/components/NavLeft';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './index.less';
export default class Admin extends Component{
    render() {
        return (
            <div className="admin-wrapper">
                <aside>
                    <NavLeft/>
                </aside>
                <article className="main-wrapper">
                    <Header/>
                    <div className="content">
                        {this.props.children}
                    </div>
                    <Footer/>
                </article>
            </div>
        );
    }
}