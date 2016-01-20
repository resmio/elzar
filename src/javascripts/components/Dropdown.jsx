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
      'dropdown_list': true,
      'hidden': !this.state.isOpen
    });
    var that = this;
    let children = React.Children.map(that.props.children, function(child){that._renderChild(child)});
    console.log(that.props.children);
    console.log(children);
    return (
      <div
        className={ childrenClass }
      >
        { children }
      </div>
    )
  }

  _renderChild(child) {
    let childProps = child.props || {};
    return React.cloneElement(
      child,
      { className: 'dropdown_item' },
      child.props
    );
  }

  _switchState() {
    this.setState({isOpen: !this.state.isOpen});
  }
}
