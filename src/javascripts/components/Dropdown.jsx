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
    let theClass = classNames({
      'dropdown': true,
      'open': this.state.isOpen,
      'dropdown_colored': this.props.colored
    });
    return (
      <div className={ theClass }
           onClick={ this._switchState }
        >
        <button id="dLabel"
                className="dropdown_btn"
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
        >
          <span>{ this.props.displayText }</span>
          <svg viewBox="0 0 100 100" className="icon arrows_icon dropdown_icon">
            <use xlinkHref="#symbol-arrow-down"></use>
          </svg>
        </button>
        { this._renderList() }
      </div>
    );
  }

  _renderList() {
    const that = this;
    let items = React.Children.map(
      that.props.children,
      function(child){
        return that._renderItems(child)
      }
    );
    return (
      <ul
        className='dropdown_list'
        aria-labelledby="dLabel"
      >
        { items }
      </ul>
    )
  }

  _renderItems(item) {
    let theClass = classNames({
      'dropdown_link': (item.type === 'a')
    });
    console.log(theClass);

    // We can not extend React elements, that's whay we clone it
    let itemWithClass = React.cloneElement(
      item,
      { className: theClass }
    );

    return (
      <li className='dropdown_item'>
        { itemWithClass }
      </li>
    )
  }

  _switchState() {
    this.setState({isOpen: !this.state.isOpen});
  }
}

Dropdown.propTypes = {
  displayText: React.PropTypes.string,
  colored: React.PropTypes.bool
};
