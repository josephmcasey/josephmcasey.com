import React from 'react';
import GenericCard from './GenericCard';

export default class TwitterCard extends GenericCard {
  constructor(props) {
    super(props);
  }

  render(a, b, c) {
    console.log('TwitterCard: ', this.state);

    const { tweet } = this.state.data;

    return (
      <a className="card card-twitter" href={this.state.link} target="_blank">
        <div className="identifier">{this.state.id}</div>
        <div className="title_sub">{tweet}</div>
        <time>{this.state.date}</time>
      </a>
    );
  }
}