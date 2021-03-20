import React, { Component } from 'react';
import Header from '../header-footer/header/Header';
import Footer from '../header-footer/footer/Footer';
import './Layout.scss'

export default class Layout extends Component {
    render() {
        return (
            <div>
                 <Header />
                <div className="page-container" >
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}
