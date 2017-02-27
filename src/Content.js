/**
 * The content of page
 * Which could be changed by router
 * Created by chknight on 27/11/16.
 */
import React, { Component } from 'react';
import Index from './index/Index'
import './App.css';

class Content extends Component {
    render() {
        return (
            <Index />
        );
    }
}

export default Content;
