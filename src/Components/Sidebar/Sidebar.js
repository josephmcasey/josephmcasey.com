import React, {Component} from 'react';
import {SearchBox} from 'react-instantsearch/dom';

import Name from "../../Components/Name/Name"

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar-container">
                <h1>Joseph Casey</h1>
                <p>Developer, Originator, & Contriver. Search through my work below.</p>
                <SearchBox defaultRefinement="Tech Articles" />
            </div>
        )
    }
}

export default Sidebar;