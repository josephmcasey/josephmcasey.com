import React from 'react';
import Card from './Card';

export default class MediumCard extends Card {
  constructor(props) {
    super(props);
  }

  render(a, b, c) {
    console.log('MediumCard: ', this.state);

    const { title, subtitle, teaser } = this.state.data;

    return (
      <a className="card card-medium" href={this.state.link} target="_blank">
        <div className="identifier">{this.state.id}</div>
        <div className="title">{title}</div>
        <div className="title_sub">{subtitle}</div>
        <p>{teaser}</p>
        <time>{this.state.date}</time>
      </a>
    );
  }
}
