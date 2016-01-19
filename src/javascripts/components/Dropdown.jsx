const React = require('react');
// const ReactDOM = require('react-dom');

export default class Dropdown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this._switchState = this._switchState.bind(this);
  }

  render() {
    return (
      <div
        className="dropdown"
        onClick={ this._switchState }
      >
        { this.props.displayText }
        { this._renderChildren() }
      </div>
    );
  }

  _renderChildren() {
    if (this.state.isOpen)
     {
      return this.props.children
    }
  }

  _switchState() {
    this.setState({isOpen: !this.state.isOpen});
  }
}
