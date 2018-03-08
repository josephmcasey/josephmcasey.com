import React, { Component } from 'react';

/**
 * Interactively offers options of playing the arcade machine or viewing other content
 */
class GenericCard extends Component {
  constructor(props) {
    super(props);

    this.state = props.state;
  }

  render() {
    console.log('GenericCard: ', this.state);

    const { primary, secondary, content } = this.state.data;

    return (
      <a className="card card-generic" href={this.state.link} target="_blank">
        <small className="identifier">{this.state.id}</small>
        <h1 className="title">{primary}</h1>
        <h2 className="title_sub">{secondary}</h2>
        <p>{content}</p>
        <time>{this.state.date}</time>
      </a>
    );
  }
}

export default GenericCard;
