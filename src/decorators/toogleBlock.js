import React from 'react';

export default OriginalComponent =>
  class toggleBlock extends React.Component {
    state = {
      isOpen: this.props.isOpen || false,
    };

    toggleOpen = () => {
      this.setState(state => ({
        isOpen: !state.isOpen,
      }));
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      );
    }
  };
