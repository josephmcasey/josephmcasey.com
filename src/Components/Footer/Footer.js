import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer_wrapper">
        <p>&copy; {new Date().getUTCFullYear()} Joseph Casey. Made in the USA.</p>
      </footer>
    );
  }
}

export default Footer;
