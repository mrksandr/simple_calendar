import React, { Component } from 'react';

class ContactLink extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="contact-link-block">
        <div className="contact-link-header">
          <div className="contact-link-icon">JS</div>
          <h3>{title}</h3>
        </div>
      </div>
    );
  }
}

export default ContactLink;
