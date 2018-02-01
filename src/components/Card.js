import React, { Component } from 'react';
import toogleBlock from './decorators/toogleBlock';

class Card extends Component {
  render() {
    const { isOpen, toggleOpen, title } = this.props;
    return (
      <div className="toogle-block">
        <div className="toogle-header" onClick={toggleOpen}>
          <div className="toogle-icon">JS</div>
          <h3>{title}</h3>
          {this.getArrow()}
        </div>
        {this.getBody()}
      </div>
    );
  }

  getArrow() {
    const { body, isOpen } = this.props;
    if (!body) return null;
    return <div className={isOpen ? 'arrow active' : 'arrow'} />;
  }

  getBody() {
    if (!this.props.isOpen || !this.props.body) return null;

    return (
      <div class="toogle-body">
        <div dangerouslySetInnerHTML={{ __html: this.props.body }} />
      </div>
    );
  }
}

export default toogleBlock(Card);
