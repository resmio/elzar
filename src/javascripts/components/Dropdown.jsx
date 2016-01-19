const React = require('react');
// const ReactDOM = require('react-dom');

export default class Dropdown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div className="dropdown">
        { this.props.children }
      </div>
    );
  }
}
