import React, { Component } from 'react';
import {InstantSearch, SearchBox} from 'react-instantsearch/dom';
import Name from "../../Components/Name"

class Home extends Component {

  render() {

    return (
        <InstantSearch
            appId="ENW4VC4AR0"
            apiKey="1d13bc5f497e3ecb05c5a1718c1c807f"
            indexName="prod_personal">
            <Name/>
            <div>
                <div>
                    <h2>Software Engineer</h2>
                    <h3>Writing clean, structured, and reliable code</h3>
                    <a>Contact Me</a>
                </div>
                <SearchBox />
            </div>
        </InstantSearch>
    );
  }
}

export default Home;
