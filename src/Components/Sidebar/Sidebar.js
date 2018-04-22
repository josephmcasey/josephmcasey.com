import React, { Component } from 'react';
import { SearchBox } from 'react-instantsearch/dom';

class Sidebar extends Component {
  render() {
    return (
      <header className="sidebar-container">
        <div className="sidebar-content">
          <h1>Joseph Casey</h1>
          <p>Developer, Originator, & Contriver. Search through my work below.</p>
        </div>
        <br />
        <SearchBox />
      </header>
    );
  }
}

export default Sidebar;
