import React, { Component } from 'react';

import ContentCard from "../ContentCard/ContentCard";

/**
 * Interactively offers options of playing the arcade machine or viewing other content
 */
class Sidebar extends Component {

    render() {
        return (
            <div className="search-result-container">
                <ContentCard/>
            </div>
        )
    }
}

export default Sidebar;