import React, { Component } from 'react';
import { Hits, Pagination } from 'react-instantsearch/dom';

import Card from '../Card/Card';

/**
 * Interactively offers options of playing the arcade machine or viewing other content
 */
class Sidebar extends Component {
  render() {
    return (
      <div className="search-result-container">
        <Hits hitComponent={Card} />
        <Pagination />
      </div>
    );
  }
}

export default Sidebar;
