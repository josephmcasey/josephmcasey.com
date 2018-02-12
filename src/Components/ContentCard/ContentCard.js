import React, { Component } from 'react';

import Footer from "../../Components/Footer/Footer";

/**
 * Interactively offers options of playing the arcade machine or viewing other content
 */
class ContentCard extends Component {

    render() {
        return (
            <div className="content-container">
                <div className="number">.001</div>
                <img className="image" />
                {/*"http://lorempixel.com/400/200"*/}
                <div className="title">Title</div>
                <div className="title_sub">Subtitle</div>
                <a href="https://www.example.com" target="_blank"/>
                <Footer/>
            </div>
        )
    }
}

export default ContentCard;