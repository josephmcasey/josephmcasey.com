import React, { Component } from 'react';

/**
 * Interactively offers options of playing the arcade machine or viewing other content
 */
class Name extends Component {

    render() {
        return (
            <div id="shapes">
                <div id="triangle" className="shape"/>
                <div id="circle" className="shape"/>
                <div id="square" className="shape"/>
                <div id="line" className="shape"/>
            </div>
        )
    }
}

export default Name;
