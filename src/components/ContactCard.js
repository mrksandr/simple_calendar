import React, { Component } from 'react';

class ContactCard extends Component {
  render() {
    const { title, icon, to } = this.props;
    return (
      <div className="contact-link-block">
        <div className="contact-link-header">
          {icon && <div className={`contact-link-icon ${icon}`} />}

          <h3>{title}</h3>
          {to && (
            <a className="btn" href={to}>
              Visit Page
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default ContactCard;
