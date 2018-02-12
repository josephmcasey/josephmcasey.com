import React, { Component } from 'react';
import {InstantSearch, Hits, SearchBox, Highlight, RefinementList, Pagination, CurrentRefinements, ClearAll} from 'react-instantsearch/dom';

import ContentCard from "../ContentCard/ContentCard";

/**
 * Interactively offers options of playing the arcade machine or viewing other content
 */
class Sidebar extends Component {

    render() {
        return (
            <div className="search-result-container">
                <Hits hitComponent={ContentCard} />
                <Pagination />
            </div>
        )
    }
}

export default Sidebar;