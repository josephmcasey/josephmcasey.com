import React, { Component } from 'react';
import {Hits, Pagination } from 'react-instantsearch/dom';

import GenericCard from "../Card/GenericCard";

/**
 * Interactively offers options of playing the arcade machine or viewing other content
 */
class Sidebar extends Component {

    render() {
        return (
            <div className="search-result-container">
                <Hits hitComponent={GenericCard} />
                <Pagination />
            </div>
        )
    }
}

export default Sidebar;
