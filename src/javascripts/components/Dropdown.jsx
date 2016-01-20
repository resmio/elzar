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
    let childrenClass = classNames({
      // dropdown_list is colliding with the styles so we set it to false for the time being
      'dropdown_list': false,
      'hidden': !this.state.isOpen
    });
    var that = this;
    let children = React.Children.map(
      that.props.children,
      function(child){
        return that._renderChild(child)
      }
    );
    return (
      <ul
        className={ childrenClass }
      >
        { children }
      </ul>
    )
  }

  _renderChild(child) {
    return (
      <li className="dropdown_item">
        { child }
      </li>
    )
  }

  _switchState() {
    this.setState({isOpen: !this.state.isOpen});
  }
}
