import React, { Component } from 'react';
import { Hits } from 'react-instantsearch/dom';

import SocialMediaCard from '../Card/SocialMediaCard';
import MediumCard from '../Card/MediumCard';

function cardSelector({ hit }) {
  const { objectID, type, data } = hit;

  switch (type) {
    case 'platform':
      return <SocialMediaCard id={objectID} data={data} />;
    case 'medium':
      return <MediumCard id={objectID} data={data} />;
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div className="search-result-container">
        <Hits hitComponent={cardSelector} />
      </div>
    );
  }
}

export default Sidebar;
