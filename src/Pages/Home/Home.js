import React, {Component} from 'react';

import Sidebar from "../../Components/Sidebar/Sidebar";
import SearchResults from "../../Components/SearchResults/SearchResults";

class Home extends Component {

    render() {
        return (
            <div className="home-container">
                <Sidebar/>
                <SearchResults/>
            </div>
        );
    }
}

export default Home;
