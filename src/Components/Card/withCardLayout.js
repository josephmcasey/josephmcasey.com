import React, { Component } from 'react';

const withCardLayout = SpecialContent => {
  class Card extends Component {
    render() {
      const { id, data } = this.props;

      return (
        <a className="card card-generic" href={data.url} target="_blank">
          <small className="identifier">{id}</small>
          <SpecialContent data={data} />
        </a>
      );
    }
  }

  return Card;
};

export default withCardLayout;
