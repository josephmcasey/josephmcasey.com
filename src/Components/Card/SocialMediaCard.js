import React, { Component } from 'react';
import withCardLayout from './withCardLayout';

class SocialMediaProfile extends Component {
  render() {
    const { icon, title, subtitle } = this.props.data;

    return (
      <React.Fragment>
        <div className="title">
          <i className={'fab fa-' + icon} />
          &nbsp;
          {title}
        </div>
        <div className="title_sub">{subtitle}</div>
      </React.Fragment>
    );
  }
}

const SocialMediaCard = withCardLayout(SocialMediaProfile);

export default SocialMediaCard;
