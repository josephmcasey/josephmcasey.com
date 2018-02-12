import React, { Component } from 'react';
import {SearchBox} from 'react-instantsearch/dom';

import Name from "../../Components/Name/Name"

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar-container">
                <Name/>
                <h2>Software Engineer</h2>
                <h3>Writing clean, structured, and reliable code</h3>
                <a>Contact Me</a>
                <SearchBox />
            </div>
        )
    }
}

export default Sidebar;