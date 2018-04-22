import React, { Component } from 'react';
import withCardLayout from './withCardLayout';

class MediumContent extends Component {
  render() {
    const { title, teaser, publishedDate } = this.props.data;

    return (
      <React.Fragment>
        <div className="title">{title}</div>
        <p>{teaser}</p>
        <time>{publishedDate}</time>
      </React.Fragment>
    );
  }
}

const MediumCard = withCardLayout(MediumContent);

export default MediumCard;
