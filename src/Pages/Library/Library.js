import React, { Component } from 'react';
import Card from '../../Components/Card/withCardLayout';
import MediumCard from '../../Components/Card/MediumCard';
import ProfileCard from '../../Components/Card/SocialMediaCard';

export default class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [
        {
          type: 'platform',
          data: {
            title: 'Twitter',
            subtitle: 'Read my passing thoughts',
            url: 'https://twitter.com/josephmcasey',
            icon: 'twitter'
          }
        },
        {
          type: 'platform',
          data: {
            title: 'CodePen',
            subtitle: 'Look at a few frontend experiments on CodePen',
            url: 'https://codepen.io/josephmcasey',
            icon: 'codepen'
          }
        },
        {
          type: 'platform',
          data: {
            title: 'Instagram',
            subtitle: 'Take a look at a few things I saw.',
            url: 'https://www.instagram.com/josephmcasey',
            icon: 'instagram'
          }
        },
        {
          type: 'platform',
          data: {
            title: 'GitHub',
            subtitle: 'Help contribute to a few of my OSS projects',
            url: 'https://www.github.com/josephmcasey',
            icon: 'github'
          }
        },
        {
          type: 'platform',
          data: {
            title: 'Gists',
            subtitle: 'Look at a few of my favorite code samples',
            url: 'https://gist.github.com/josephmcasey',
            icon: 'codepen'
          }
        },
        {
          type: 'platform',
          data: {
            title: 'Repl.It',
            subtitle: 'Tinker away with a few running REPLs',
            url: 'https://repl.it/@josephmcasey',
            icon: 'replit'
          }
        },
        {
          type: 'platform',
          data: {
            title: 'Stackoverflow',
            subtitle: 'Help me answer a few questions',
            url: 'https://stackoverflow.com/users/1596825/josephmcasey',
            icon: 'stackoverflow'
          }
        },
        {
          type: 'platform',
          data: {
            title: 'Medium',
            subtitle: 'Come discuss a few of my thoughts',
            url: 'https://medium.com/@josephmcasey',
            icon: 'medium'
          }
        },
        {
          type: 'platform',
          data: {
            title: 'YouTube',
            subtitle: 'Watch a few videos starring yours truly',
            url: 'https://www.youtube.com/user/josephmcasey',
            icon: 'youtube'
          }
        },
        {
          type: 'platform',
          data: {
            title: 'Twitch',
            subtitle: 'Look at a few experiments on CodePen',
            url: 'https://www.twitch.tv/josephmcasey',
            icon: 'twitch'
          }
        }
      ]
    };
  }

  render() {
    const content = this.state.content;

    return (
      <div className="library">
        <div className="isolated">
          <MediumCard state={content[1]} />
        </div>
        <div className="isolated">
          <ProfileCard state={content[2]} />
        </div>
      </div>
    );
  }
}
