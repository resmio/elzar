const React = require('react');
var classNames = require('classnames');

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
    var childrenClass = classNames({
      'dropdown__list': true,
      'hidden': !this.state.isOpen
    });
    return (
      <div
        className={ childrenClass }
      >
        { this.props.children }
      </div>
    )
  }

  _switchState() {
    this.setState({isOpen: !this.state.isOpen});
  }
}
